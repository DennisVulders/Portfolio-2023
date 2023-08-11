<template>
  <main>
    <article v-for="(slide, index) in slides" :key="index" :data-index="index" :data-status="slide.status">
      <div class="article-image-section article-section" :style="{ backgroundImage: `url(${slide.image})` }"></div>
      <div class="article-description-section article-section">
        <p v-html="slide.description"></p>
      </div>
      <div class="article-title-section article-section">
        <h2>{{ slide.title }}</h2>
        <i class="fa-light fa-plus-large"></i>
      </div>
      <div class="article-nav-section article-section">
        <button class="article-nav-button" type="button" @click="handleLeftClick(index)">
          <i class="fa-light fa-arrow-left-long"></i>
        </button>
        <button class="article-nav-button" type="button" @click="handleRightClick(index)">
          <i class="fa-light fa-arrow-right-long"></i>
        </button>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          title: "Recreation From Scratch",
          description:
            'This is a recreation (from scratch) of <a class="source-link" href="https://www.dylanbrouwer.design/work" target="_blank">dylanbrouwer.design/work</a>. See how I did it <a class="yt-link" href="https://youtu.be/nG2IyH43xMU" target="_blank"><i class="fa-brands fa-youtube"></i></a>.',
          image: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
          status: "active",
        },
        {
          title: "Wicked Cool Library Shelves",
          description: "A place where books hang out waiting to be grabbed. But don't be too grabby now, ya hear?",
          image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
          status: "inactive",
        },
        {
          title: "Neato Toledo Lighthouse",
          description: "The neatest lighthouse you ever saw. Ehh, actually it's kind of messy. But that's why the pic is of the outside.",
          image: "https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          status: "inactive",
        },
        {
          title: "Super Space Blob",
          description: "The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.",
          image: "https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
          status: "inactive",
        },
      ],
    };
  },
  methods: {
    handleLeftClick(index) {
      const nextIndex = index - 1 >= 0 ? index - 1 : this.slides.length - 1;
      this.setSlideStatus(index, "after");
      this.setSlideStatus(nextIndex, "becoming-active-from-before");
      setTimeout(() => {
        this.setSlideStatus(nextIndex, "active");
        this.activeIndex = nextIndex;
      }, 400);
    },
    handleRightClick(index) {
      const nextIndex = index + 1 <= this.slides.length - 1 ? index + 1 : 0;
      this.setSlideStatus(index, "before");
      this.setSlideStatus(nextIndex, "becoming-active-from-after");
      setTimeout(() => {
        this.setSlideStatus(nextIndex, "active");
        this.activeIndex = nextIndex;
      }, 400);
    },
    setSlideStatus(index, status) {
      this.slides[index].status = status;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

main {
  flex: 1; /* This will make the main element expand to fill its parent container */
  display: grid; /* Or any other layout that suits your needs */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  overflow: hidden;
}

main > article {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: transform 400ms ease;  
}

main > article[data-status="inactive"] {
  transform: translateX(-100%);
  transition: none;
}

main > article[data-status="active"] {
  transform: translateX(0%);
}

main > article[data-status="before"] {
  transform: translateX(-100%);
}

main > article[data-status="after"] {
  transform: translateX(100%);
}

main > article[data-status="becoming-active-from-before"] {
  transform: translateX(-100%);
  transition: none;
}

main > article[data-status="becoming-active-from-after"] {
  transform: translateX(100%);
  transition: none;
}

main > article > .article-section {
  height: 100%;
  display: flex;
}

main > article > .article-description-section,
main > article > .article-nav-section {
  border-left: 1px solid $darktone;
}

main > article > .article-title-section,
main > article > .article-nav-section {
  border-top: 1px solid $darktone;
}

main > article > .article-image-section {
  background-position: center;
  background-size: cover;
}

main > article > .article-description-section {
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem; 
}

main > article > .article-description-section > p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25em;
}

main > article > .article-description-section > p  > a:hover {
  text-decoration: underline;
}

main > article > .article-title-section {
  align-items: center; 
  justify-content: space-between;
  padding: 2rem 4rem;
}

main > article > .article-title-section * {
  color: white;
}

main > article > .article-title-section > h2 {
  flex-basis: 50%;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0px;
  text-transform: uppercase;
}

main > article > .article-title-section > i {
  color: rgba(255, 255, 255, 0.75);
  font-size:  4rem;
}

main > article > .article-nav-section > .article-nav-button {
  background-color: transparent;
  flex-grow: 1;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 3rem;
  cursor: pointer;
}

main > article > .article-nav-section > .article-nav-button:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

main > article > .article-nav-section > .article-nav-button:nth-child(2) {
  border-left: 1px solid $darktone;
}

@media(max-width: 1200px) {    
  #nav-mobile-section {
    flex-basis: calc(100% * 0.75);
  }

  #nav-logo-section {
    flex-basis: calc(100% * 0.25);
  }
  
  #nav-link-section {
    flex-basis: calc(100% / 3);
    gap: 3rem;
  }

  main {
    overflow-y: auto;
  }
  
  main > article {
    grid-template-columns: none;
    grid-template-rows: 1.5fr repeat(3, 0.75fr) 0.25fr;
    height: max(900px, 100%);
  }
   
  main > article > .article-title-section > h2 {
    font-size: 3rem; 
    line-height: 2.6rem;
  }
  
  main > article > .article-title-section > i {
    font-size: 3rem; 
  }
  
  main > article > .article-description-section,
  main > article > .article-nav-section {
    border-left: none;
  }

  main > article > .article-image-section {
    order: 1;
  }
  
  main > article > .article-title-section {
    border-bottom: 1px solid $darktone;
    order: 2;
  }
  
  main > article > .article-description-section {
    justify-content: center;
    order: 3;
  }
  
  main > article > .article-nav-section {
    border-bottom: 1px solid $darktone;
    order: 4;
  }
}
@media(max-width: 800px) {
  main > article {
    grid-template-rows: 1fr repeat(4, 0.5fr);
    height: max(700px, 100%);
  }
  
  main > article > .article-title-section {
    padding: 2rem;
  }
  
  main > article > .article-title-section > h2 {
    flex-basis: 70%;
    font-size: 1.75em; 
    line-height: 1.5rem;
  }
  
  main > article > .article-title-section > i {
    font-size: 2rem; 
  }
  
  main > article > .article-description-section {
    padding: 2rem;
  }
  
  main > article > .article-description-section > p {
    font-size: 1rem;
  }
}
main > article > .article-description-section > p  > .source-link {
  color: $highlight;
  display: inline;
}

main > article .yt-link,
main > article .yt-link > i {
  color: red;
  display: inline;
}
</style>