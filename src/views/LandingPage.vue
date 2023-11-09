<template>
  <div class="hero hero__image">
    <div class="container row">
      <div class="hero__text">
        <h1>Witamy na Doctor Online!</h1>
        <p>
          Witaj w przyszłości opieki zdrowotnej! Nasza platforma umożliwia Ci
          szybkie i wygodne rezerwowanie wizyt u lekarza online. Niezależnie od
          tego, czy potrzebujesz konsultacji, recepty czy porady medycznej,
          jesteśmy tu, by Ci pomóc.
        </p>
        <router-link to="/register">
          <a href="#" class="hero__button"
            ><b-button pill variant="info"
              >Zarejestruj się juz dziś!</b-button
            ></a
          >
        </router-link>
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
.hero__text {
  width: 62%;
}
.hero__text h1 {
  font-size: 2.5em;
}
.hero__text p {
  color: #055160;
  margin-bottom: 3em;
  font-size: 1.3em;
}
</style>
