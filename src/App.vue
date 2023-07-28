<template>
  <SideMenu v-if="showSideMenu" @toggle-side-menu="toggleSideMenu" @link-clicked="closeSideMenu"/>
  <HeaderNav @toggle-side-menu="toggleSideMenu" />
  <!-- Main content container -->
  <div class="main-content">
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    SideMenu,
  },
  data() {
    return {
      showSideMenu: false, // Initially, the side menu is hidden
    };
  },
  methods: {
    toggleSideMenu() {
      this.showSideMenu = !this.showSideMenu; // Toggle the side menu's visibility
    },
    closeSideMenu() {
      this.showSideMenu = false; // Close the side menu when a link is clicked
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: $neutral-background;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}

.main-content {
  padding: 1rem;
  overflow: hidden;
  position: relative; /* Ensure the container respects z-index */
  z-index: 0; /* Set a lower z-index to keep the main content below the side menu */
}

/* Add z-index to the HeaderNav to ensure it's below the side menu */
.header-nav {
  position: relative;
  z-index: 2; /* Set a value higher than the main content but lower than the side menu */
}

</style>
