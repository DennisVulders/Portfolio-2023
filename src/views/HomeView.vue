<template>
  <div class="main-content">
    <!-- <div v-for="(star, index) in stars" :key="index" class="star" :style="star.style"></div> -->
    <section class="card-container" id="over">
      <div class="centered-columns">
        <div class="over-grid">
          <h1>Dennis Vulders</h1>
          <div class="card portret">
            <div class="card-content">
              <img src="../assets/img/portret.png" alt="foto van mijn gezicht ofzo">
              <p>
                Hey, ik ben Dennis, een front-end developer in Noord-Brabant. 
                Mijn focus ligt op het ontwerpen en bouwen van aantrekkelijke webervaringen die niet alleen visueel indruk maken, maar ook intuïtief en gebruiksvriendelijk zijn. 
                Met een oog voor detail en een passie voor nieuwe technologieën streef ik ernaar om websites te creëren die mensen echt weten te boeien en betrekken.
              </p>
            </div>
          </div>
        </div>
        <div class="skills-grid">
          <div class="skills skills-column-1">
            <h1>Mijn skills</h1>
            <div class="card">
              <div class="card-content">
                <p>
                  Mijn front-end ervaring stelt me in staat om boeiende en responsieve gebruikerservaringen te creëren. 
                  Ik heb gewerkt aan het ontwerpen en stylen van webpagina's, het tot leven brengen van interactieve elementen en het bouwen van volledig geïntegreerde webapplicaties. 
                  Mijn workflow is geoptimaliseerd met tools voor ontwerp, codering, versiebeheer en projectbeheer. 
                </p>
                <SliderContainer :skills="languageData" :speed="0.5" />
                <SliderContainer :skills="ToolsData" :speed="0.8" />
              </div>
            </div>
          </div>
          <div class="skills skills-column-2">
            <h1>Motivatie</h1>
            <div class="card">
              <div class="card-content">
                <p>
                  Als gedreven front-end developer omarm ik voortdurende groei door het verkennen van nieuwe technologieën en ontwikkelingen.
                  Mijn passie voor creatieve en functionele gebruikerservaringen stimuleert me om uitdagingen aan te gaan en innovatieve oplossingen te vinden.
                  Door mijn toewijding aan leren en voortdurende verbetering ben ik klaar om samen te werken aan projecten die zowel technisch verfijnd als visueel indrukwekkend zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="project-container" id="projecten">
      <h1 class="section-title">Mijn projecten</h1>
      <ProjectCarousel />
    </section>
    <section class="contact-container" id="contact">
        <ContactForm />
    </section>
  </div>
</template>

<script>
import SliderContainer from '@/components/SliderContainer.vue';
import ProjectCarousel from '@/components/ProjectCarousel.vue';
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    SliderContainer,
    ProjectCarousel,
    ContactForm,
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
      stars: [],
      numStars: Math.floor(Math.random() * 50) + 10 // Generates a random number between 10 and 59
    };
  },
  mounted() {
    // this.generateStars();
  },
  methods: {
    // generateStars() {
    //   for (let i = 0; i < this.numStars; i++) {
    //     const star = {
    //       style: {
    //         left: Math.random() * 100 + '%',
    //         bottom: Math.random() * 100 + 'px', // Stars start at the bottom
    //         animationDelay: Math.random() * 10 + 's'
    //       }
    //     };
    //     this.stars.push(star);
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.main-content {
  // padding-bottom: 14vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3rem;
}

.centered-columns {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
}

.portret {
  width: 30rem;
}

.portret > .card-content > img {
  height: 50vh;
  border-radius: 1.5rem;
  width: 100%;
  object-fit: cover;
  object-position: 100% 10%;
}

.portret > .card-content > p {
  text-align: center;
}

.over-grid {
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
}
.skills-grid {
  display: grid;
  grid-template-rows: repeat(2, auto); /* Two rows of equal height */
  gap: 1rem; /* Gap between rows */
}

.skills-column-1 {
  grid-row: span 2; /* Occupies rows 1 and 2 */
}

.skills-column-2 {
  grid-row: span 2; /* Occupies rows 1 and 2 */
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
}

.project-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: 100vh;
}

.contact-container {
  min-height: 100vh;
}

//mobile 
@media screen and (max-width: 768px) {
  
  .centered-columns {
    flex-wrap: wrap;
    gap: 2rem;
  }
  .portret {
    width: inherit;
  }
  .skills-grid {
    gap: 2rem;
  }
}


</style>
