<template>
  <div class="container">
    <div class="wrap-slider" ref="wrapSlider">
      <ul class="js-slider">
        <!-- Pass the 'icons' prop to the SliderItem component -->
        <SliderItem v-for="(skill, index) in skills" :key="index" :skill="skill" :icon="skill.icon" />
      </ul>
    </div>
  </div>
</template>
<script>
import SliderItem from './SliderItem.vue';

export default {
  components: {
    SliderItem,
  },
  props: {
    skills: {
      type: Array,
      default: () => [
        { text: 'HTML', icon: ['fab', 'html5'] },
      ],
    },
    speed: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      wrapSlider: null,
      sliderList: [],
      stateList: [],
      isPaused: false,
      widthWrap: 0,
      iterationItems: 0,
    };
  },
  mounted() {
    this.wrapSlider = this.$refs.wrapSlider;
    this.widthWrap = this.wrapSlider.offsetWidth;
    this.initSlider();
    this.startAnimation();
  },
  methods: {
    calculateIterationItems() {
      const sliderWidth = this.$el.querySelector('.js-slider').offsetWidth;
      return Math.ceil((this.widthWrap + sliderWidth) / sliderWidth);
    },
    initSlider() {
      this.sliderList = this.$el.querySelectorAll('.js-slider');

      this.iterationItems = this.calculateIterationItems();

      if (this.iterationItems > 1) {
        for (let i = 0; i < this.iterationItems - 1; i++) {
          const clone = this.sliderList[0].cloneNode(true);
          this.wrapSlider.appendChild(clone);
        }

        this.sliderList = this.$el.querySelectorAll('.js-slider');
      }

      this.sliderList = Array.from(this.sliderList); // Convert to an array

      this.stateList = this.sliderList.map((item, i) => {
        let pos = 0;
        let start = false;

        if (i < this.iterationItems - 1) {
          pos = -this.widthWrap + this.sliderList[i].offsetWidth * i;
          start = true;
          this.sliderList[i].style.transform = `translate(${pos}px, -50%)`;
        }

        return {
          pos,
          start,
        };
      });
    },
    startAnimation() {
      this.translate();
      if (!this.isPaused) {
        requestAnimationFrame(this.startAnimation);
      }
    },
    translate() {
      for (let i = 0; i < this.sliderList.length; i++) {
        const slider = this.sliderList[i];
        const sliderWidth = slider.offsetWidth;
        const nextIndex = i != this.sliderList.length - 1 ? i + 1 : 0;
        let pos;

        if (this.stateList[i].start) {
          this.stateList[i].pos -= this.speed; // Use the 'speed' prop here
          pos = this.stateList[i].pos;
          slider.style.transform = `translate(${pos}px, -50%)`;
        }

        const isComplete = pos <= -sliderWidth;
        const isOutSeen = pos <= -this.widthWrap - sliderWidth;

        if (isComplete) {
          this.stateList[nextIndex].start = true;
        }

        if (isOutSeen) {
          this.stateList[i].start = false;
          this.stateList[i].pos = 0;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: auto;
}

.wrap-slider {
  width: 100%;
  overflow: hidden;
  height: 3rem;
  position: relative;
  &::before,
  &::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 80px;
    height: 100%;
  }
  &::before {
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgb(10, 11, 11) 20%, rgba(10, 11, 11, 0) 100%);
  }
  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(to left, rgb(10, 11, 11) 20%, rgba(10, 11, 11, 0) 100%);
  }
}

.js-slider {
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: row;
  will-change: transform;
}

</style>