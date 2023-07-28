<template>
  <nav data-toggled="false" data-transitionable="false">
    <div id="nav-logo-section" class="nav-section">
      <router-link to="/">
        <img src="@/assets/logo-border.svg" alt="logo" class="logo-img">
      </router-link>
    </div>
    <button class="nav-toggle-button" type="button" @click="handleNavToggle">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <div class="nav-page-section">
      <div id="nav-link-section" class="nav-section nav-mobile-visible">
        <router-link :to="{ name: 'about' }" class="">About</router-link>
        <router-link :to="{ name: 'about' }" class="">About</router-link>
        <router-link :to="{ name: 'about' }" class="">About</router-link>
      </div>
      <div id="nav-social-section" class="nav-section nav-mobile-visible">
        <a href="#">
          <font-awesome-icon icon="fa-regular fa-envelope" />
        </a>
        <a href="#" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="#">
          <font-awesome-icon icon="fa-brands fa-codepen" />
        </a>
      </div>
      <div id="nav-contact-section" class="nav-section nav-mobile-visible">
        <a href="#">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleNavToggle() {
      this.$emit('toggle-side-menu'); // Emit an event to the parent component (e.g., App.vue)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $darktone;
  backdrop-filter: blur(16px);
  background-color: $background-transparent;
  justify-content: space-between;
}

nav .nav-section {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-left: 1px solid $darktone;
  align-items: center;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: $highlight;
}

.nav-page-section {
  display: flex;
  flex-basis: calc(100% * (2 / 3));
  z-index: 2;
  width: 100vw;
}

.nav-mobile-visible {
  display: flex;
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
  #nav-social-section,
  #nav-contact-section {
    display: none;
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
    border-left: 1px solid $darktone;
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
</style>