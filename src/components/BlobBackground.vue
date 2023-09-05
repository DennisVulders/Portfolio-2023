<template>
  <div>
    <div id="circle" :style="circleStyle"></div>
    <!-- Your main content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleStyle: {
        
      }

    };
  },
  methods: {
    handlePointerMove(event) {
      const { clientX, clientY } = event;
      const circleSize = 100; // Adjust this value as needed for the circle's size
      this.circleStyle.left = `${clientX - circleSize / 2}px`;
      this.circleStyle.top = `${clientY - circleSize / 2}px`;
    },
  },
  mounted() {
    window.addEventListener("pointermove", this.handlePointerMove);
  },
  beforeUnmount() {
    window.removeEventListener("pointermove", this.handlePointerMove);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

#circle {
  background-color: white;
  height: 14vmax;
  aspect-ratio: 1;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, $highlight, mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.8;

  transition: transform 0.2s ease-in-out; /* Add a transition for smoother movement */
  will-change: transform; /* Optimize for performance */
  pointer-events: none; /* Allow pointer events to pass through the circle */

  position: fixed; // Set the position to fixed to make it stay in view while scrolling
  z-index: -1; // Set the zIndex to be lower than other content
  transform-origin: center center; // Set the transform origin to the center
  filter: blur(100px); // Apply a blur effect (adjust the value as needed)
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}

/* Your main content styles here */
</style>
