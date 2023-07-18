<template>
  <header class="header">
      <router-link to="/start">
          <img :src="logoSrc" alt="logo" class="logo">
      </router-link>
  </header>
</template>

<script>
export default {
  props: {
      btnType: String,
      btnText: String,
      logoSrc: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  align-items: center;
  padding: 8px 0px 0px 0px;
  margin: 0px 56px 32px 56px;
}

.logo-container {
  flex: 1;
}

.logo {
  width: 100px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}

// media queries
@media (max-width: 575px)  {
  .header {
      margin: 0px 10px 32px 10px;
  }
}
</style>