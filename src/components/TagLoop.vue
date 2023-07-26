<template>
  <section class="slide-option">
    <div id="infinite" class="highway-slider">
      <div class="container highway-barrier" ref="highwayBarrier">
        <div class="highway-lane-wrapper">
          <ul class="highway-lane">
            <SkillTag
              v-for="(text, index) in skillTags"
              :key="index"
              :text="text"
              :initialPosition="index * 180"
              :highwayBarrierWidth="highwayBarrierWidth"
              :resetPosition="laneWidth"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillTag from '@/components/SkillTag.vue';

export default {
  components: {
    SkillTag,
  },
  props: {
    skillTags: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      highwayBarrierWidth: 0,
    };
  },
  mounted() {
    // Get the width of the highway-barrier element
    this.highwayBarrierWidth = this.$refs.highwayBarrier.clientWidth;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

section {
  display: flex;
  flex-flow: column;
  align-items: center;
  div.container {
    transition: all .3s ease;
    h1 { margin: 15px 0 0 0; }
    h3 { margin: 0 0 25px 0; }
  }
  @media (max-width: 992px) { padding: 0 20px 0 20px; }
}
section.slide-option {
  margin: 0 0 50px 0;
}

div.highway-slider {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  div.highway-barrier {
    overflow: hidden;
    position: relative;
  }
  ul.highway-lane {
    display: flex;
    height: 100%;
    /* Width of the entire content (visible + invisible) */
    width: calc(180px * 6);
    font-size: 0; /* Set font size to zero to remove white space between inline-block elements */
  }

  li.highway-car {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #343434;
    width: 180px;
    font-size: 16px; /* Adjust the font size back to the desired value */
  }
}

@keyframes translatestf {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-200%); }
}
#stffull div.highway-barrier {
  ul.highway-lane {
    width: 300px;
    li.highway-car {
      animation: translatestf 30s linear infinite;
      h4 { font-size: 28px; }
    }
  }
}

@keyframes translateinfinite {
  100% { transform: translateX(calc(-180px * 6)); }
}
#infinite div.highway-barrier {
  &::before,
  &::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 80px;
    height: 100%;
  }
  &::before {
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgb(16, 16, 16) 20%, rgba(16, 16, 16, 0) 100%);
  }
  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(to left, rgb(16, 16, 16) 20%, rgba(16, 16, 16, 0) 21%);
  }
}

.highway-lane-wrapper {
  display: flex;
  overflow: hidden; /* Hide the items that go outside the wrapper */
  /* Adjust the animation duration to control the speed */
  animation: translateinfinite 15s linear infinite;
}

ul.highway-lane {
  /* Width of the entire content (visible + invisible) */
  width: calc(180px * 6);
}

li.highway-car {
  width: 180px;
}

.icon-size {
  font-size: 65px;
}

#red { background: #cb5454; }
#orange { background: #cb8054; }
#yellow { background: #cbba54; }
#green { background: #69b46e; }
#blue { background: #6091b0; }

</style>

