<template>
  <li class="item">
    <div class="tag-row_talent-tags">
      <div class="tag">
        <div class="tag-border">
          <div class="tag-inside-wrapper">
            <div class="tag-green-dot"></div>
              <a :href="skill.href" :class="skill.class">{{ skill.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
li {
  padding: 10px;

  p {
    display: block;
    padding: 50px;
    white-space: nowrap;
    background: rgba(255, 0, 0, 0.8);
    color: rgba(0, 0, 255, 0.9);
    text-decoration: none;
    transition: background 0.3s ease-in, color 0.3s ease-out;
    will-change: color, background;
  }
}

.item {
  h4 { font-size: 28px; }
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343434;
  text-decoration: none;
}

.tag-row_talent-tags {
  grid-column-gap: 1rem;
  display: flex;
  flex: none;
}

.tag {
  flex: 1;
}

.tag-border {
  background-image: linear-gradient(to right, #00B894, #00FFD4, #00B894);
  border-radius: 999px;
  padding: 1px;
}

.tag-inside-wrapper {
  grid-column-gap: .5rem;
  color: #c2bad9;
  white-space: nowrap;
  background-color: #0c0228;
  border: 0 #000;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  padding: .75rem 1.5rem .6rem;
  font-family: roc-grotesk,sans-serif;
  font-size: 1.125rem;
  line-height: 1;
  display: flex;
}

.tag-green-dot {
  width: 8px;
  height: 8px;
  max-height: 8px;
  max-width: 8px;
  min-height: 8px;
  min-width: 8px;
  background-color: $highlight;
  border-radius: 999px;
  margin-top: -2px;
}
</style>