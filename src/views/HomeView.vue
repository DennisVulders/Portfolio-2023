<template>
  <div class="main-content">
    <div class="card">
      <div class="card-content">
        <h1 ref="title" data-value="About me" class="magic">About me</h1>
        <h2>My name is Dennis Vulders</h2>
        <p>blablablablablablablablablablablablabla</p>
      </div>
    </div>
    <SliderTag/>

    <!-- <TagScroller /> -->
    <!-- <TimeLine/> -->
  </div>
</template>
<script>
// import TimeLine from "@/components/TimeLine.vue";
// import TagScroller from "@/components/TagScroller.vue";
import SliderTag from '@/components/SliderTag.vue';

export default {
  components: {
    // TimeLine,
    // TagScroller,
    SliderTag,
  },
  mounted() {
    this.animateText(); // Invoke the animation on page load

    const title = this.$refs.title;
    title.addEventListener("mouseover", this.animateText); // Add event listener for mouseover
  },
  methods: {
    animateText() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iteration = 0;
      let interval = null;
      const title = this.$refs.title;

      clearInterval(interval);

      interval = setInterval(() => {
        title.innerText = title.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= title.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 4;
      }, 30);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

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
