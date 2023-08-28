<template>
  <li class="item">
    <div class="tag-row_talent-tags">
      <div class="tag">
        <div class="tag-border">
          <div class="tag-inside-wrapper">
            <div class="tag-icon">
              <font-awesome-icon v-if="Array.isArray(icon)" :icon="icon" />
              <img v-else :src="icon" class="custom-svg-icon"/>
            </div>
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
    icon: {
      type: [Array, String], // Allow both Array and String types for the icon prop
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: $highlight;
  border-radius: 20px;
  padding: 1px;
}

.tag-inside-wrapper {
  grid-column-gap: .5rem;
  color: $text;
  white-space: nowrap;
  background-color: $background-accent;
  border: 0 #000;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  padding: .75rem 1.5rem .6rem;
  font-size: 1.125rem;
  line-height: 1;
  display: flex;
}

.tag-icon {
  font-size: 15px;
}
.custom-svg-icon {
  height: 15px;
  width: 15px;
}
</style>