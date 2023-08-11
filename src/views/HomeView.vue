<template>
  <div class="main-content">
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <img src="../assets/logox128.png" alt="foto van mijn gezicht ofzo">
          <h1>Dennis Vulders</h1>
          <p>Hallo, ik ben Dennis, een front-end developer gevestigd in Noord-Brabant. 
            Ik bouw interactieve en esthetisch aantrekkelijke webervaringen om gebruikers te betrekken en te verrassen. 
            Mijn passie voor webontwikkeling drijft me om voortdurend nieuwe technologieën te verkennen en hoogwaardige oplossingen te leveren.
          </p>
          <SliderContainer :skills="languageData" :speed="0.5" />
          <SliderContainer :skills="ToolsData" :speed="0.8" />
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logox128.png" alt="foto van mijn gezicht ofzo">
          <h1 ref="title" data-value="About me" class="magic">About me</h1>
          <h2>Dennis Vulders</h2>
          <p>With over a decade of experience across multi-disciplines, Jordan creates intuitive and aesthetically engaging digital experiences alongside chosen partners.</p>
        </div>
      </div>
    </div>
    <!-- <div class="carousel-container">
      <CaseCarousel />
    </div> -->
    <TestTest />
    <div style="height: 100px; width: 100px; background-color: red;"></div>
  </div>
</template>

<script>
import SliderContainer from '@/components/SliderContainer.vue';
import TestTest from '@/components/TestTest.vue';
// import CaseCarousel from '@/components/CaseCarousel.vue';

export default {
  components: {
    SliderContainer,
    TestTest,
    // CaseCarousel
  },
  data() {
    return {
      languageData: [
        { text: 'HTML', icon: ['fab', 'html5'] },
        { text: 'CSS', icon: ['fab', 'css3'] },
        { text: 'Scss/Sass', icon: ['fab', 'sass'] },
        { text: 'JavaScript', icon: ['fab', 'square-js'] },
        { text: 'Vue.js', icon: ['fab', 'vuejs'] },
        { text: 'Node.js', icon: ['fab', 'node'] },
        { text: 'Wordpress', icon: ['fab', 'wordpress'] },

      ],
      ToolsData: [
        { text: 'Figma', icon: ['fab', 'figma'] },
        { text: 'Visual Studio Code', icon: "img/icons/vscode.svg" },
        { text: 'Github', icon: ['fab', 'github'] },
        { text: 'Trello', icon: ['fab', 'trello'] },
        { text: 'Adobe Creative Cloud', icon: "img/icons/Adobe.svg" },
      ],
    };
  },

  mounted() {
    // this.animateText(); // Invoke the animation on page load

    // const title = this.$refs.title;
    // title.addEventListener("mouseover", this.animateText); // Add event listener for mouseover
  },
  methods: {
    // animateText() {
    //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //   let iteration = 0;
    //   let interval = null;
    //   const title = this.$refs.title;

    //   clearInterval(interval);

    //   interval = setInterval(() => {
    //     title.innerText = title.innerText
    //       .split("")
    //       .map((letter, index) => {
    //         if (index < iteration) {
    //           return title.dataset.value[index];
    //         }

    //         return letters[Math.floor(Math.random() * 26)];
    //       })
    //       .join("");

    //     if (iteration >= title.dataset.value.length) {
    //       clearInterval(interval);
    //     }

    //     iteration += 1 / 4;
    //   }, 30);
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.main-content {
  padding: 14vh 0rem 0rem 0rem;
  // overflow: hidden;
  overflow-x: hidden;
  // position: relative; /* Ensure the container respects z-index */
  // z-index: 0; /* Set a lower z-index to keep the main content below the side menu */
  // border: aliceblue 1px solid;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
}

.carousel-container {
  position: relative;
}

</style>
