<template>
  <div class="main-content">
    <SliderTag/>
  </div>
</template>

<script>
import SliderTag from '@/components/SliderTag.vue';

export default {
  components: {
    SliderTag,
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  padding: 1rem;
  overflow: hidden;
}

body {
	display:flex;
	flex-flow:column;
	justify-content:center;
	background:#eaeaea;
	height:100vh;
}
</style>