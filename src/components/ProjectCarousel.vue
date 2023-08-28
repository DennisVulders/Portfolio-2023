<template>
  <main class="" :style="{ height: mainHeight }">
    <div class="article-wrapper">
      <article v-for="(slide, index) in slides" :key="index" :data-status="slideStatus[index]" :class="{ 'mobile-layout': isMobile }">
        <div class="article-image-section article-section " :style="{ backgroundImage: `url(${slide.image})` }"></div>
        <div class="article-description-section article-section">
          <p>{{ slide.description }}</p>
        </div>
        <div class="article-title-section article-section ">
          <h2>{{ slide.title }}</h2>
        </div>
        <div class="article-nav-section article-section ">
          <button class="article-nav-button" type="button" @click="handleLeftClick(index)">
            <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
          </button>
          <button class="article-nav-button" type="button" @click="handleRightClick(index)">
            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
          </button>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      mainHeight: 'auto', // Initialize mainHeight to 'auto'
      activeIndex: 0,
      slideStatus: Array(5).fill('inactive'), // Initialize statuses for 4 slides
      slides: [
        {
          title: 'Maturity model tool',
          description: 'Voor mijn afstudeer opdracht heb ik een "Maturity model tool" gemaakt voor LiveWall, gericht op hun label &Ploy. Met deze tool kunnen ze beter en sneller een overzicht krijgen van het probleem van de klant en zo gemakkelijker tot een passende op maat gemaakte oplossing komen.',
          image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          client: 'LiveWall',
          link: '',
          tags: ['Vue 3', '']
        },
        {
          title: 'OpenBoek Nijmegen',
          description: 'Open Boek Nijmegen, een stichting die jongeren aan het woord laat over hun psychische klachten. Voor deze stichting ben ik momenteel bezig om een Wordpress website te maken die zij zelf kunnen onderhouden.',
          image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
          client: 'OpenBoek Nijmegen',
          link: '',
          tags: ['Development', '']
        },
        {
          title: 'PSV Playoffs app',
          description: 'PSV Playoffs is een schoolproject die ik samen met een team andere studenten heb ontwikkeld voor de experience box in het PSV stadion. Hier was het doel om de data die te zien is in de experience box op een interessantere manier weer te geven en om een gamification element toe te voegen.',
          image: 'https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
          client: 'PSV',
          link: '',
          tags: ['Development', 'UI/UX designer', ]
        },
        {
          title: 'Content Dashboard',
          description: 'Voor mijn stage heb ik een dashboard ontworpen en uitgewerkt tot een werkend prototype. Met dit dashboard zijn de klanten van LiveWall in staat om de statistieken van hun game te bekijken, cheaters te blokkeren en een deel van de content te beheren. Dit was voor mij mijn eerste grote Vue project.',
          image: 'https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
          client: 'LiveWall',
          link: '',
          tags: ['Development']
        },
        {
          title: 'De Patatterie Someren',
          description: 'Mijn eerste zelfstandige project voor een klant was om een wordpress website voor de Pattatterie te maken',
          image: 'https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
          client: ['De Patatterie'],
          link: 'https://patatteriesomeren.nl/',
          tags: ['Development']
        },
      ]
    };
  },
    // Watch for changes in the slideStatus to update the main height
  watch: {
    slideStatus() {
      this.updateMainHeight();
    }
  },
  mounted() {
    // Set the first slide as active by default
    this.slideStatus[0] = 'active';
    this.updateMainHeight();
    this.checkMobile();
  },
  computed: {
    // Calculate the maximum height of the articles
    maxArticleHeight() {
      const articles = document.querySelectorAll('.article-wrapper article');
      const maxHeight = Math.max(...Array.from(articles).map(article => article.clientHeight));
      return `${maxHeight}px`;
    }
  },
  methods: {
    handleLeftClick(index) {
      const nextIndex = index - 1 >= 0 ? index - 1 : this.slideStatus.length - 1;

      this.slideStatus[index] = 'after';
      this.slideStatus[nextIndex] = 'becoming-active-from-before';

      setTimeout(() => {
        this.slideStatus[nextIndex] = 'active';
        this.activeIndex = nextIndex;
      });
    },
    handleRightClick(index) {
      const nextIndex = index + 1 <= this.slideStatus.length - 1 ? index + 1 : 0;

      this.slideStatus[index] = 'before';
      this.slideStatus[nextIndex] = 'becoming-active-from-after';

      setTimeout(() => {
        this.slideStatus[nextIndex] = 'active';
        this.activeIndex = nextIndex;
      });
    },
    updateMainHeight() {
      // Update mainHeight to the maximum article height
      this.mainHeight = this.maxArticleHeight;
    },
    checkMobile() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  },
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";

main {
  flex-grow: 1;
  height: 80vh;
  overflow: hidden;
  border: 1px solid $highlight;
  border-left: none;
  border-right: none;
}

.article-wrapper {
  display: flex; /* Use flex display to stack articles */
  position: relative;
  height: 100%; /* Make sure the wrapper takes up full height */
}

article {
  flex: 0 0 100%; /* Each article takes full width of the wrapper */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 4fr 1fr;
  position: absolute; /* Position articles absolutely for overlap effect */
  top: 0;
  left: 0;
  transition: transform 400ms ease;
  width: 100%;
  min-height: 100%;
}

article[data-status="inactive"] {
  transform: translateX(-100%);
  transition: none;
}

article[data-status="active"] {
  transform: translateX(0%);
}

article[data-status="before"] {
  transform: translateX(-100%);
}

article[data-status="after"] {
  transform: translateX(100%);
}

article[data-status="becoming-active-from-before"] {
  transform: translateX(-100%);
  transition: none;
}

article[data-status="becoming-active-from-after"] {
  transform: translateX(100%);
  transition: none;
}

article > .article-description-section,
article > .article-nav-section {
  border-left: 1px solid $highlight;
}

article > .article-title-section,
article > .article-nav-section {
  border-top: 1px solid $highlight;
  display: flex;
}

// image section

article > .article-image-section {
  background-position: center;
  background-size: cover;
}

// Article description

article > .article-description-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem; 
}

article > .article-description-section > p {
  color: $text;
  font-size: 1.25em;
  text-align: left;
}

article > .article-description-section > p  > a:hover {
  text-decoration: underline;
}

// Title section

article > .article-title-section {
  display: flex;
  align-items: center; 
  justify-content: space-between;
  padding: 2rem 5rem;
}

article > .article-title-section * {
  color: $text;
}

article > .article-title-section > h2 {
  text-align: left;
  flex-basis: 50%;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0px;
  text-transform: uppercase;
}

article > .article-title-section > i {
  color: $text;
  font-size: 4rem;
}

// Nav button section

article > .article-nav-section > .article-nav-button {
  background-color: transparent;
  flex-grow: 1;
  border: none;
  outline: none;
  color: $text;
  font-size: 3rem;
  cursor: pointer;
}

article > .article-nav-section > .article-nav-button:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

article > .article-nav-section > .article-nav-button:nth-child(2) {
  border-left: 1px solid $highlight;
}

// mobile

@media screen and (max-width: 768px) {
  main {
    max-height: 800px;
  }
  article.mobile-layout {
    grid-template-columns: 1fr; /* Change to a single column layout */
    grid-template-rows: 1fr;
    height: 100%;
  }

  article.mobile-layout > .article-image-section {
    order: 1; /* Reorder the image to the top */
    width: 100%;
  }

  article.mobile-layout > .article-description-section {
    order: 3; /* Reorder the description */
    padding: 1rem;
    border-top: 1px solid $highlight;
    border-left: 0px;
  }

  article.mobile-layout > .article-title-section {
    order: 2; /* Reorder the title */
    padding: 2rem 1rem;
  }
  article.mobile-layout > .article-title-section > h2 {
    font-size: 2.5rem;
    flex-basis: 100%;
  }

  article.mobile-layout > .article-nav-section {
    order: 4; /* Reorder the navigation */
    border-bottom: 1px solid $highlight;
    border-left: 0px;
  }

  article.mobile-layout > .article-nav-section > .article-nav-button {
    font-size: 2.5rem;
    padding: 2rem 0rem;
  }
}

</style>