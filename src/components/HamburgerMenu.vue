<template>
  <div class="ham">
    <svg class="ham hamRotate ham4" viewBox="0 0 100 100" width="60" :class="{ active: isActive }" @click="handleClick">
      <path
        class="line top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
  <path
        class="line middle"
        d="m 70,50 h -40" />
  <path
        class="line bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  props: {
    isActive: Boolean, // Receive the isActive prop from the parent component
  },
  methods: {
    handleClick() {
      // Emit the custom event along with isActive state
      this.$emit('hamburger-click', !this.isActive);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border-radius: 50%;
  border: $highlight solid 1px;
}

.ham.active {
  transform: rotate(45deg);
  background-color: $highlight;
  border-radius: 50%;
  border: $neutral-background solid 1px;
  stroke: $neutral-background;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: $highlight;
  stroke-width: 2.5;
  stroke-linecap: round;
}

.ham .active > .line{
  stroke: $neutral-background;
}

.ham4 {
  backdrop-filter: blur(10px); /* You can adjust the blur value */
}

.ham4 .top {
  stroke-dasharray: 40 121;
}

.ham4 .bottom {
  stroke-dasharray: 40 121;
}

.ham4.active .top {
  stroke-dashoffset: -68px;
}

.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
</style>
