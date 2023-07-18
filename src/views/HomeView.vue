<template>
  <div>
    <h1 ref="title" data-value="DENNIS VULDERS" class="magic">DENNIS VULDERS</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    this.animateText(); // Invoke the animation on page load

    const title = this.$refs.title;
    title.addEventListener("mouseover", this.animateText); // Add event listener for mouseover
  },
  methods: {
    animateText() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iteration = 0;
      let interval = null;
      const title = this.$refs.title;

      clearInterval(interval);

      interval = setInterval(() => {
        title.innerText = title.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= title.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 4;
      }, 30);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/main.scss";
body {
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0rem;
  overflow: hidden;
}

h1 {
  font-family: "Space Mono", monospace;
  font-size: clamp(3rem, 10vw, 10rem);
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
}

.magic {
  animation: background-pan 2s linear infinite;
  background: linear-gradient(
    to right,
    $primary,
    $darktone,
    $highlight,
    $primary
  );
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
}
</style>
