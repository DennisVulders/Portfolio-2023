<template>
  <div class="card">
    <div class="card-content">
      <h1 ref="title" data-value="About me" class="magic">About me</h1>
      <h2>My name is Dennis Vulders</h2>
      <p>blablablablablablablablablablablablabla</p>
    </div>
  </div>
  <!-- Pass the 'skillsData' to the 'SliderContainer' component -->
  <!-- <SliderContainer :skills="skillsData" :speed="0.5" /> -->
</template>

<script>
// import SliderContainer from '@/components/SliderContainer.vue';
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Import the necessary Font Awesome icon style
// not working yet
export default {
  components: {
    // SliderContainer,
  },
  data() {
    return {
      skillsData: [
        { text: 'HTML', icon: ['fab', 'html5'] },
        { text: 'CSS', icon: ['fab', 'css3'] },
        { text: 'Scss/Sass', icon: ['fab', 'sass'] },
        { text: 'JavaScript', icon: ['fab', 'square-js'] },
        { text: 'Vue.js', icon: ['fab', 'vuejs'] },
        { text: 'Node.js', icon: ['fab', 'node'] },
        { text: 'Github', icon: ['fab', 'github'] },
      ],
    };
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

body {
	display:flex;
	flex-flow:column;
	justify-content:center;
	background:#eaeaea;
	height:100vh;
}

</style>
