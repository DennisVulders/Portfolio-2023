<template>
  <nav class="side-menu" :class="{ 'side-menu-open': showSideMenu }">
    <!-- Your side menu content here -->
    <router-link @click="handleLinkClick" :to="{ name: 'about' }" class="nav-item">About</router-link>
    <router-link @click="handleLinkClick" :to="{ name: 'about' }" class="nav-item">About</router-link>
    <router-link @click="handleLinkClick" :to="{ name: 'about' }" class="nav-item">About</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showSideMenu: false, // Initially the side menu is hidden
    };
  },
  methods: {
    toggleSideMenu() {
      this.showSideMenu = !this.showSideMenu;
    },
    handleLinkClick() {
      this.showSideMenu = false; // Close the side menu when a link is clicked
      this.$emit('link-clicked'); // Emit an event to the parent component
    },
  },
};
</script>

<style lang="scss">
/* Add necessary styles for the side menu */
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw; /* Adjust the width as needed */
  background-color: #ffffff;
  z-index: 40; /* Set a higher z-index to make it appear above the main content */
  transform: translateX(70%);
  transition: transform 0.3s ease-in-out;
  text-align: right;
}

.side-menu-open {
  transform: translateX(0);
}

/* Style the links inside the side menu */
.side-menu .nav-item {
  text-decoration: none;
  display: block;
  color: #2c3e50;
  font-size: 1.2rem;
  padding: 1rem 2rem 1rem 1rem;
  border-bottom: 1px solid #ccc;
}

.side-menu .nav-item:hover {
  background-color: #f5f5f5;
}
</style>
