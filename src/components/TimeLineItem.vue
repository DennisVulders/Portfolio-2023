<template>
  <div class="card">
    <div class="card-content">
      <div class="year">{{ year }}</div>
      <div class="image">
        <img :src="imageUrl" alt="Item Image" />
      </div>
      <h3 ref="title">{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    year: String,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.image {
  width: 60px;
}

.image img {
  width: 100%;
  border-radius: 4px;
}

.year {
  display: flex;
  justify-content: center;
  color: $highlight;
}
</style>
