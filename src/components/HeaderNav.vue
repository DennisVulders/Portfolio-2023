<template>
  <nav data-toggled="false" data-transitionable="false">
    <div id="nav-logo-section" class="nav-section">
      <router-link to="/">
        <img src="@/assets/logo-border.svg" alt="logo" class="logo-img">
      </router-link>
    </div>
    <div id="nav-mobile-section">
      <div id="nav-link-section" class="nav-section">
        <router-link to="/about" class="">About</router-link>
        <router-link to="/about" class="">About</router-link>
        <router-link to="/about" class="">About</router-link>
      </div>
      <div id="nav-social-section" class="nav-section">
        <a href="#">
          <font-awesome-icon icon="fa-regular fa-envelope fa-xl" />
        </a>
        <a href="#" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="#">
          <font-awesome-icon icon="fa-brands fa-codepen" />
        </a>
      </div>
      <div id="nav-contact-section" class="nav-section">
        <a href="#">Contact</a>
      </div>
    </div>
    <button id="nav-toggle-button" type="button" onclick="handleNavToggle()">
      <span>Menu</span>
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $darktone;
  backdrop-filter: blur(16px);
  background-color: $background-transparent;
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

#nav-mobile-section {
  display: flex;
  flex-basis: calc(100% * (2 / 3));
  z-index: 2;
}

#nav-toggle-button { 
  align-items: center;
  background-color: transparent;
  border: none;
  border-left: 1px solid $darktone;
  color: white;
  cursor: pointer;
  display: none;
  gap: 0.8rem;
  height: 100%;
  justify-content: center;
  outline: none;
  padding: 0rem 3rem;
  position: relative;
  z-index: 3;
}

#nav-toggle-button:hover,
#nav-toggle-button:hover > span {
  color: $highlight;
}

#nav-toggle-button > span,
#nav-toggle-button > i { 
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
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

</style>