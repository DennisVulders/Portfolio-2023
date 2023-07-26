<template>
  <li class="highway-car" :style="tagStyle">
    <div class="tag-row_talent-tags">
      <div class="tag">
        <div class="tag-border">
          <div class="tag-inside-wrapper">
            <div class="tag-green-dot"></div>
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    initialPosition: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      position: this.initialPosition,
      laneWidth: 180 * 6, // Width of the visible lane (180px per skill tag)
    };
  },
  computed: {
    tagStyle() {
      return {
        transform: `translateX(${this.position}px)`,
      };
    },
  },
  watch: {
    position(newPosition) {
      // Check if the SkillTag has moved outside the visible lane
      if (newPosition <= -10) {
        this.position = this.laneWidth; // Reset to the right edge of the lane
        console.log(this.laneWidth)
      }
    },
  },
  methods: {
    animate() {
      // Move the SkillTag to the left by 1px per animation frame
      this.position -= 1;
    },
  },
  mounted() {
    // Start the animation loop when the component is mounted
    this.animationId = requestAnimationFrame(this.animate);
  },
  beforeUnmount() {
    // Stop the animation loop when the component is unmounted
    cancelAnimationFrame(this.animationId);
  },
  unmounted() {

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.tag-row_talent-tags {
  grid-column-gap: 1rem;
  display: flex;
  flex: none;
}

.tag {
  flex: 1;
}

.tag-border {
  background-image: linear-gradient(to right, #00B894, #00FFD4, #00B894);
  border-radius: 999px;
  padding: 1px;
}

.tag-inside-wrapper {
  grid-column-gap: .5rem;
  color: #c2bad9;
  white-space: nowrap;
  background-color: #0c0228;
  border: 0 #000;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  padding: .75rem 1.5rem .6rem;
  font-family: roc-grotesk,sans-serif;
  font-size: 1.125rem;
  line-height: 1;
  display: flex;
}

.tag-green-dot {
  width: 8px;
  height: 8px;
  max-height: 8px;
  max-width: 8px;
  min-height: 8px;
  min-width: 8px;
  background-color: $highlight;
  border-radius: 999px;
  margin-top: -2px;
}
</style>
