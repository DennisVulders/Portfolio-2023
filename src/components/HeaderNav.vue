<template>
  <div class="nav-wrapper">
    <nav data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" class="nav-section">
        <router-link to="/" @click="handleLinkClick">
          <img src="@/assets/img/logo-border.svg" alt="logo" class="logo-img">
        </router-link>
      </div>
      <ul id="nav-link-section" class="nav-section">
        <li><a href="#over" class="drop-down-item" @click="handleLinkClick">Over</a></li>
        <li><a href="#projecten" class="drop-down-item" @click="handleLinkClick">Projecten</a></li>
        <li><a href="#contact" class="drop-down-item" @click="handleLinkClick">Contact</a></li>
      </ul>
      <div id="nav-mobile-section">
        <HamburgerMenu class="nav-toggle-button" @hamburger-click="handleHamburgerClick" :isActive="isMenuOpen"/>
        <div class="mobile-menu-container" :style="getTransformStyle">
          <div v-if="isMenuOpen" class="rela-block drop-down-container">
            <a href="#over" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-regular fa-envelope" class="mob-nav-icon"/>
              Over mij
            </a>
            <a href="#projecten" target="_blank" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="mob-nav-icon"/>
              Mijn projecten
            </a>
            <a href="#contact" class="drop-down-item" @click="handleLinkClick">
              <font-awesome-icon icon="fa-solid fa-file" class="mob-nav-icon"/>
              Contact
            </a>
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
  methods: {
    handleLinkClick(event) {
    this.isMenuOpen = false; // Close the mobile menu

    const targetSection = document.querySelector(event.target.getAttribute('href'));
    if (targetSection) {
      event.preventDefault(); // Prevent default link behavior
      let offsetTop = targetSection.getBoundingClientRect().top;
      let adjustedOffsetTop = offsetTop;

      if (event.target.getAttribute('href') === '#over') {
        adjustedOffsetTop -= 14 * window.innerHeight / 100; // Subtract 14vh
      }

      window.scrollTo({
        top: window.scrollY + adjustedOffsetTop,
        behavior: 'smooth',
      });
    }
  },
    handleHamburgerClick(isActive) {
      this.isMenuOpen = isActive;
    },
  },
  setup() {
    const isMenuOpen = ref(false);

    // Use computed to make getTransformStyle reactive to changes in isMenuOpen
    const getTransformStyle = computed(() => {
      return isMenuOpen.value ? { height: "100vh", padding: "16vh 0 0 0" } : { height: 0 , padding: 0};
    });

    return {
      isMenuOpen,
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
  height: 12vh;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
}

nav .nav-section {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  z-index: 5;
}

nav a {
  text-decoration: none;
  color: $highlight;
}

.nav-page-section {
  display: flex;
  z-index: 2;
}

#nav-link-section {
  margin: 0rem 1rem 0 0;
  list-style: none;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background-color: #1313134d;
  height: fit-content;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  text-transform: uppercase;
  flex-direction: row;
  justify-content: center;
  border-radius: 0.5rem;
  align-self: center;
}

#nav-link-section > li {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50px;
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
    color: white;
    cursor: pointer;
    gap: 0.8rem;
    justify-content: center;
    outline: none;
    padding: 0rem 1rem;
    position: relative;
    z-index: 5;
  }

  .nav-toggle-button:hover,
  .nav-toggle-button:hover > span {
    color: $highlight;
  }
}

// mobile side-menu

.mobile-menu-container {
  height: 0;
  width: 100vw;
  border: 0;
  border-radius: 0 0px 15px 15px;
  position: fixed;
  right: 0px;
  background-color: rgba(16, 16, 16, 0.88);
  transform-origin: top right; /* Set the transformation origin to the top right corner */
  transition:  0.7s ease; /* Use transform and max-width for the transition */
  z-index: 3;
  overflow: hidden;
  backdrop-filter: blur(10px); /* You can adjust the blur value */
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
  color: $highlight;
  font-family: "Montserrat";
  padding: 1rem;
  border-bottom: none;
  position: relative; /* Add relative positioning to contain the pseudo-element */
  transition: border-bottom-color 0.3s ease-out; /* Transition the border-bottom-color property */
}

.drop-down-item::after {
  content: '';
  position: absolute;
  bottom: -2px; /* Position the pseudo-element just below the item's border */
  left: 50%; /* Start from the middle */
  transform: translateX(-50%); /* Center the pseudo-element */
  width: 0; /* Initially no width */
  height: 2px; /* Height of the border */
  background-color: $highlight; /* Border color */
  transition: width 0.3s ease-out, opacity 0.3s ease-out; /* Transition width and opacity properties */
  opacity: 0; /* Initially no border */
}

.drop-down-item:hover::after {
  width: 100%; /* Expand the width on hover and for active items */
  opacity: 1; /* Show the border on hover and for active items */
}

.mobile-menu-container > .drop-down-container > .drop-down-item {
  border-bottom: 1px solid $highlight;
}

.mob-nav-icon {
  margin-right: 1rem;
}
</style>