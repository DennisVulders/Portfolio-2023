<template>
  <main :style="{ height: mainHeight }">
    <div class="article-wrapper">
      <article v-for="(slide, index) in slides" :key="index" :data-status="slideStatus[index]" :class="{ 'mobile-layout': isMobile }">
        <div class="article-image-section article-section" :style="{ backgroundImage: `url(${slide.image})` }"></div>
        <div class="article-description-section article-section">
          <p v-html="slide.description"></p>
        </div>
        <div class="article-title-section article-section">
          <h2>{{ slide.title }}</h2>
          <font-awesome-icon :icon="['fas', 'plus']" />
        </div>
        <div class="article-nav-section article-section">
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
      slideStatus: Array(4).fill('inactive'), // Initialize statuses for 4 slides
      slides: [
        {
          title: 'Recreation From Scratch',
          description: 'This is a recreation (from scratch) of <a class="source-link" href="https://www.dylanbrouwer.design/work" target="_blank">dylanbrouwer.design/work</a>. See how I did it <a class="yt-link" href="https://youtu.be/nG2IyH43xMU" target="_blank"><i class="fa-brands fa-youtube"></i></a>.',          image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
        {
          title: 'Wicked Cool Library Shelves',
          description: 'A place where books hang out waiting to be grabbed. But don\'t be too grabby now, ya hear?',
          image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
        },
        {
          title: 'Neato Toledo Lighthouse',
          description: 'The neatest lighthouse you ever saw. Ehh, actually it\'s kind of messy. But that\'s why the pic is of the outside.',
          image: 'https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
        },
        {
          title: 'Super Space Blob',
          description: 'The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn\'t really a heart, per se.',
          image: 'https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
        }
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
  // height: 80vh;
  overflow: hidden;
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
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25em;
}

article > .article-description-section > p  > a:hover {
  text-decoration: underline;
}

// Title section

article > .article-title-section {
  display: flex;
  align-items: center; 
  justify-content: space-between;
  padding: 2rem 4rem;
}

article > .article-title-section * {
  color: white;
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
  color: rgba(255, 255, 255, 0.75);
  font-size:  4rem;
}

// Nav button section

article > .article-nav-section > .article-nav-button {
  background-color: transparent;
  flex-grow: 1;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.75);
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
    height: 40vh;
  }

  article.mobile-layout > .article-description-section {
    order: 3; /* Reorder the description */
    padding: 2rem;
    border-top: 1px solid #00deb4;
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
    border-bottom: 1px solid #00deb4;
    border-left: 0px;
  }

  article.mobile-layout > .article-nav-section > .article-nav-button {
    font-size: 2.5rem;
    padding: 2rem 0rem;
  }
}

</style>