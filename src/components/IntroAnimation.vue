<template>
  <div>
    <div class="intro" :class="{ 'active': introActive }">
      <div class="logo-header">
        <img
          src="@/assets/img/logo-border.svg"
          alt="logo"
          class="logo-img"
        >
        <h1 class="welcome-text" :class="{ 'hidden': !textVisible }">
          Welkom bij mijn portfolio!
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introActive: false,
      textVisible: false,
    };
  },
  mounted() {
    this.animateLogo();
  },
  methods: {
    animateLogo() {
      const intro = this.$el.querySelector(".intro");
      const logoImg = this.$el.querySelector(".logo-img");
      const welcomeText = this.$el.querySelector(".welcome-text");

      setTimeout(() => {
        this.introActive = true; // Activate the intro animation

        setTimeout(() => {

          this.textVisible = true;
          // Reveal "welkom" text letter by letter
          this.revealTextLetterByLetter(welcomeText, () => {
            // Callback when text reveal is done
            const textContent = welcomeText.textContent;
            const delay = 150; // Delay between revealing each letter
            logoImg.classList.add("fade"); // Fade out the image
            welcomeText.classList.add("fade"); // Fade out the image
            intro.style.height = "0"; // Slide out the intro
            
            setTimeout(() => {
            }, textContent.length * delay);
          });
        }, 1000); // Adjust the timing to match the animation duration
      });
    },

    revealTextLetterByLetter(element, callback) {
      const textContent = element.textContent;
      const delay = 100; // Delay between revealing each letter

      element.textContent = ""; // Clear the content to reveal letter by letter

      for (let i = 0; i < textContent.length; i++) {
        setTimeout(() => {
          element.textContent += textContent[i];
          if (i === textContent.length - 1 && callback) {
            // Call the callback when last letter is revealed
            callback();
          }
        }, i * delay);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.intro {
  position: fixed;
  z-index: 15;
  left: 0;
  top: 100%; /* Start off-screen */
  width: 100%;
  height: 100vh;
  background-color: $background-accent;
  transition: height 1s; /* Use transition to animate the movement */
}

.intro.active {
  top: 0; /* Slide the intro up */
}

.logo-header {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-img {
  display: block;
  max-width: 100%;
  height: auto;
  scale: 0;
  animation: scaleLogo 2.5s cubic-bezier(.25, 1, .30, 1) both;
}

.intro.active .logo-img {
  scale: 5;
}

.welcome-text {
  width: 100vw;
  position: absolute;
  top: 500%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  text-align: center;
}

.fade {
  opacity: 0;
  transition: ease-in-out 0.3s all;
}

.hidden {
  opacity: 0;
}

@keyframes scaleLogo  {
  0% {
    scale: 0;
  }
  40% {
    scale: 3;
  }
  100% {
    scale: 5;
  }
}
</style>
