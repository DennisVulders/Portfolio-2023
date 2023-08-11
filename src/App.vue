<template>
  <HeaderNav @toggle-side-menu="toggleSideMenu" />
  <router-view />
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
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
      this.showSideMenu = false; // Close the side menu when a link is clicked or a click event occurs outside the component
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/style/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

nav a {
  color: white;
  &.router-link-exact-active {
    color: $highlight;
  }
}

/* Add z-index to the HeaderNav to ensure it's below the side menu */
.header-nav {
  position: relative;
  z-index: 2; /* Set a value higher than the main content but lower than the side menu */
}

</style>
