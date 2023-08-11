<template>
  <div
    class="the-bass"
    :style="getTransformStyle"
    @click="handleOutsideClick"
  >
    <div v-if="isMenuOpen" class="rela-block drop-down-container">
      <!-- Your dropdown items go here -->
      <router-link :to="{ name: 'about' }" class="drop-down-item" @click="closeMenu">About</router-link>
      <router-link :to="{ name: 'about' }" class="drop-down-item" @click="closeMenu">About</router-link>
      <router-link :to="{ name: 'about' }" class="drop-down-item" @click="closeMenu">About</router-link>
      <a href="#" class="drop-down-item">
        <font-awesome-icon icon="fa-regular fa-envelope" />
      </a>
      <a href="#" target="_blank" class="drop-down-item">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </a>
      <a href="#" class="drop-down-item">
        <font-awesome-icon icon="fa-brands fa-codepen" />
      </a>
      <a href="#" class="drop-down-item" @click="closeMenu">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
  },
  computed: {
    getTransformStyle() {
      return this.isMenuOpen ? { height: "43vh" } : { height: 0 };
    },
  },
  methods: {
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        // Check if the clicked element is outside the SideMenu component
        this.$emit("link-clicked");
      }
    },
    closeMenu() {
      this.$emit("link-clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.the-bass {
  height: 0;
  width: 60vw; /* Set the initial max-width to 0 */
  border: 1px $darktone solid;
  border-radius: 0 0px 15px 15px;
  position: fixed;
  right: 0;
  top: 6.5rem;
  background-color: rgba(16, 16, 16, 0.88);
  transform-origin: top right; /* Set the transformation origin to the top right corner */
  transition:  0.35s ease; /* Use transform and max-width for the transition */
  z-index: 90;
  overflow: hidden;
}


.drop-down-container {
  left: 50%;

  &:nth-child(1) {
    transition: 0.3s ease, top 0.4s 0.4s ease;
  }
  &:nth-child(2) {
    transition: 0.3s ease, top 0.4s 0.46s ease;
  }
  &:nth-child(3) {
    transition: 0.3s ease, top 0.4s 0.52s ease;
  }
  &:nth-child(4) {
    transition: 0.3s ease, top 0.4s 0.58s ease;
  }
  &:nth-child(5) {
    transition: 0.3s ease, top 0.4s 0.64s ease;
  }
  &:nth-child(6) {
    transition: 0.3s ease, top 0.4s 0.7s ease;
  }
  &:nth-child(7) {
    transition: 0.3s ease, top 0.4s 0.7s ease;
  }
}

.rela-block {
  position: relative;
}

.drop-down-container {
  height: 15%;
  transform: translateX(-50%);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.drop-down-item {
  text-decoration: none;
  color: #00deb4;
  font-family: "Montserrat";
  border-bottom: 1px rgb(37, 90, 85) solid;
  padding: 1rem;
}
</style>
