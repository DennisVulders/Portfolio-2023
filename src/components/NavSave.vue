<template>
  <div class="nav-wrapper">
    <!-- The transparent dark background that covers the whole screen -->
    <div v-if="isMenuOpen" class="dark-background" @click="handleHamburgerClick(false)"></div>
    <nav data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" class="nav-section">
        <router-link to="/" @click="handleLinkClick">
          <img src="@/assets/logo-border.svg" alt="logo" class="logo-img">
        </router-link>
      </div>
      <div class="nav-page-section">
        <div id="nav-link-section" class="nav-section ">
          <router-link :to="{ name: 'about' }" class="">About</router-link>
          <router-link :to="{ name: 'about' }" class="">Work</router-link>
        </div>
        <!-- <div id="nav-social-section" class="nav-section ">
          <a href="#">
            <font-awesome-icon icon="fa-regular fa-envelope" />
          </a>
          <a href="#" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-file" />
          </a>
        </div> -->
      </div>
      <!-- Mobile version of the navbar -->
      <div id="nav-mobile-section">
        <HamburgerMenu class="nav-toggle-button" @hamburger-click="handleHamburgerClick" :isActive="isMenuOpen"/>
        <div class="mobile-menu-container" :style="getTransformStyle">
          <div v-if="isMenuOpen" class="rela-block drop-down-container">
            <router-link :to="{ name: 'about' }" class="drop-down-item" @click="handleLinkClick">About</router-link>
            <router-link :to="{ name: 'about' }" class="drop-down-item" @click="handleLinkClick">Work</router-link>
            <a href="#" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-regular fa-envelope" class="mob-nav-icon"/>
              Stuur me een mailtje!
            </a>
            <a href="#" target="_blank" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="mob-nav-icon"/>
              Zeg hallo op LinkedIn!
            </a>
            <a href="#" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-solid fa-file" class="mob-nav-icon"/>
              Bekijk mijn CV!
            </a>
            <!-- <a href="#" class="drop-down-item" @click="handleLinkClick">Contact</a> -->
          </div>
        </div>      
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import HamburgerMenu from '@/components/HamburgerMenu.vue';

export default {
  components: {
    HamburgerMenu,
  },
  setup() {
    const isMenuOpen = ref(false);

    const handleHamburgerClick = (isActive) => {
      isMenuOpen.value = isActive;
    };

    const handleLinkClick = () => {
      isMenuOpen.value = false;
    };

    // Use computed to make getTransformStyle reactive to changes in isMenuOpen
    const getTransformStyle = computed(() => {
      return isMenuOpen.value ? { height: "18.4vh",   border: "1px rgb(37, 90, 85) solid" } : { height: 0 , border: "0"};
    });

    return {
      isMenuOpen,
      handleLinkClick,
      handleHamburgerClick,
      getTransformStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.nav-wrapper {
  position: relative;
  z-index: 10;
}

.dark-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust the alpha value for the desired transparency */
  z-index: 2; /* Set a z-index behind the navigation bar */
}

nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $highlight;
  backdrop-filter: blur(16px);
  background-color: $neutral-background;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
}

nav .nav-section {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-left: 1px solid $highlight;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

nav a {
  text-decoration: none;
  color: $highlight;
}

.nav-page-section {
  display: flex;
  flex-basis: calc(100% / 3 * 2);
  z-index: 2;
}

#nav-mobile-section {
  display: none;
}

.nav-toggle-button {
  display: none; /* Show the navigation button in mobile view */
}

#nav-social-section,
#nav-contact-section {
  flex-grow: 1;
}

#nav-logo-section {
  flex-basis: calc(100% / 3);
  justify-content: flex-start;
  border-left: none;
}

#nav-logo-section > a {
  font-size: 2.5rem;
}

.logo-img {
  width: 64px;
  height: 64px;
}

#nav-link-section {
  flex-basis: 50%;
  gap: 6rem;
}

#nav-social-section {
  gap: 3rem;
}

#nav-social-section > a {
  font-size: 1.5rem;
}

/* Media query for mobile view */
@media screen and (max-width: 768px) {
  nav {
    flex-wrap: wrap; /* Allow items to wrap to a new line */
  }

  .nav-section {
    flex-basis: 100%; /* Make each section take full width in mobile view */
    justify-content: center;
    border-left: none; /* Remove the left border on sections in mobile view */
    padding: 0; /* Remove padding in mobile view */
  }

  /* Show the mobile-specific elements and hide the desktop ones */
  #nav-link-section,
  .nav-page-section,
  #nav-social-section,
  #nav-contact-section {
    display: none;
  }

  #nav-mobile-section {
    display: flex;
  }

  .nav-page-section {
    flex-basis: 100%; /* Take full width in mobile view */
    flex-wrap: wrap;
  }

  .nav-toggle-button {
    display: flex; /* Show the navigation button in mobile view */
    align-items: center;
    background-color: transparent;
    border: none;
    border-left: 1px solid $highlight;
    color: white;
    cursor: pointer;
    gap: 0.8rem;
    justify-content: center;
    outline: none;
    padding: 0rem 3rem;
    position: relative;
    z-index: 3;
  }

  .nav-toggle-button:hover,
  .nav-toggle-button:hover > span {
    color: $highlight;
  }
}

// mobile side-menu

.mobile-menu-container {
  height: 0;
  width: 100vw; /* Set the initial max-width to 0 */
  border: 0;
  border-radius: 0 0px 15px 15px;
  position: fixed;
  right: -1px;
  top: 6.5rem;
  background-color: rgba(16, 16, 16, 0.88);
  transform-origin: top right; /* Set the transformation origin to the top right corner */
  transition:  0.35s ease; /* Use transform and max-width for the transition */
  z-index: 5;
  overflow: hidden;
}

.rela-block {
  position: relative;
}

.drop-down-container {
  height: 15%;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.drop-down-item {
  text-decoration: none;
  color: #00deb4;
  font-family: "Montserrat";
  border-bottom: 1px rgb(37, 90, 85) solid;
  padding: 1rem 1rem 1rem 1.5rem;
}

.mob-nav-icon {
  margin-right: 1rem;
}
</style>