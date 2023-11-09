<template>
  <div class="hero hero__image">
    <div class="container row">
      <div class="hero__text">
        <h1>Witamy na Doctor Online!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nemo
          esse, assumenda perferendis ad quod, repellendus eos quos temporibus
          dolore mollitia earum eum quaerat, adipisci fugit blanditiis laborum
          odio facilis.
        </p>

        <a href="#" class="hero__button"
          ><b-button pill variant="info">Zarejestruj wizytę</b-button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style>
.container {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
}
.row {
  display: flex;
  justify-content: space-between;
}
.hero__image {
  background-image: url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
.hero {
  color: #0dcaf0;
  padding: 300px 50px;
}
.hero p {
  color: #055160;
  margin-bottom: 3em;
}
.hero__text {
  width: 62%;
}
</style>
