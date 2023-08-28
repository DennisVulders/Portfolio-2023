<template>
  <section class="contact-container">
    <div class="call-to-action">
      <h1 class="cta-title">Neem contact met me op 
        <font-awesome-icon icon="face-laugh-beam" class="icon-highlight" />
      </h1>
      <div class="cta-btn-wrapper">
        <a href="#">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-regular fa-envelope" />
              Mail mij
          </div>
        </a>
        <a href="#">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="mob-nav-icon"/>
            LinkedIn
          </div>
        </a>
        <a href="#">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-regular fa-file" class="mob-nav-icon"/>
            Bekijk mijn CV
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1rem;
}

.call-to-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.cta-title {
  text-transform: uppercase;
  color: $text;
}

.icon-highlight {
  color: $highlight;
}

.cta-btn-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

.cta-btn-wrapper > a > div {
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0.5rem;
}
.cta-btn {
  border: 1px solid $highlight;
  background: $background-accent;
  color: $highlight;
  font-size: 1.5rem;
  text-align: left;
  transition: ease-in-out 0.3s;
}

.cta-btn:hover {
  // border: 1px solid $background-accent;
  // background: $highlight;
  // color: $background-accent;
  box-shadow: 0 0 10px rgba(144, 255, 0, 0.7);
}

// mobile
@media screen and (max-width: 768px) {
  .contact-container {
    display: block;
  }
  .call-to-action {
    align-items: flex-start;
    gap: 2rem;
  }
  .cta-btn-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .cta-btn-wrapper > a > div {
    width: 50vw;
    justify-content: flex-start;
  }
}

</style>