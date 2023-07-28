<template>
  <div class="container">
    <div class="wrap-slider" ref="wrapSlider">
      <ul class="js-slider">
        <SliderItem v-for="(skill, index) in skills" :key="index" :skill="skill" />
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
  data() {
    return {
      skills: [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'Scss/Sass' },
        { text: 'Vue' },
        { text: 'Node.js' },
      ],
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
      return Math.ceil(this.widthWrap / sliderWidth);
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
        let pos = -item.offsetWidth * (i + 1); // Set the initial position outside the left edge
        let start = true; // Set all to start as true initially

        item.style.transform = `translate(${pos}px, -50%)`; // Apply initial translation

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
          this.stateList[i].pos += 0.5; // Change the sign to "+" to move items to the right
          pos = this.stateList[i].pos;
          slider.style.transform = `translate(${pos}px, -50%)`;
        }

        const isComplete = pos >= this.widthWrap; // Check if it reaches the right boundary
        const isOutSeen = pos >= 0; // Check if it has come back to the start of the parent div

        if (isComplete) {
          // Move the item to the left of the '.wrap-slider' container
          this.stateList[i].pos = this.stateList[nextIndex].pos - sliderWidth;

          // Reset the item's position immediately
          slider.style.transform = `translate(${this.stateList[i].pos}px, -50%)`;

          this.stateList[nextIndex].start = true;
          this.stateList[i].start = false;
        }

        if (isOutSeen) {
          this.stateList[i].start = true; // Start the item's animation again after resetting to the start
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
  width: 50vw;
  height: 100%;
  align-items: center;
  margin: auto;
}

.wrap-slider {
  width: 100%;
  overflow: hidden;
  height: 200px;
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
    background: linear-gradient(to right, rgb(16, 16, 16) 20%, rgba(16, 16, 16, 0) 100%);
  }
  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(to left, rgb(16, 16, 16) 20%, rgba(16, 16, 16, 0) 100%);
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