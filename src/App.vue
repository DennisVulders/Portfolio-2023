<template>
  <HeaderNav></HeaderNav>
  <router-view />
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'; // Import the Header component

export default {
  name: 'App',
  components: {
    HeaderNav, // Register the Header component
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
</style>
