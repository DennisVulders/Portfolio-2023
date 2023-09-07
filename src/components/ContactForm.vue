<template>
  <div class="contact-wrapper">
    <div class="call-to-action ">
      <h1 class="cta-title">Neem contact met me op 
        <font-awesome-icon icon="face-laugh-beam" class="icon-highlight" />
      </h1>
      <div class="cta-btn-wrapper">
        <a href="mailto:dennisvulderswork@gmail.com">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-regular fa-envelope" />
              Mail mij
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dennis-vulders-b6b43a188/" target="_blank">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="mob-nav-icon"/>
            LinkedIn
          </div>
        </a>
        <a href="/img/CV-2023.pdf" target="_blank">
          <div class="cta-btn">
            <font-awesome-icon icon="fa-regular fa-file" class="mob-nav-icon"/>
            Bekijk mijn CV
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 100vh;
}

.call-to-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  height: 100%;
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
  box-shadow: 0 0 10px rgba(144, 255, 0, 0.7);
}

// mobile
@media screen and (max-width: 768px) {
  .contact-wrapper {
    display: block;
  }
  .call-to-action {
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