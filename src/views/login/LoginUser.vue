<template>
  <div class="login__page flex-container">
    <form class="login">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Hasło" />
      <b-button pill variant="info">Zaloguj</b-button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
/* Colors */
$greenSeaweed: rgb(0, 225, 255);
$blueQueen: rgb(0, 121, 123);
$redFire: rgb(12, 120, 150);

/* Fonts */
$fontAsap: "Asap", sans-serif;
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimalna wysokość kontenera to 100% widoku */
}

.login__page {
  flex: 1; /* Elastyczny element, aby wypełnić dostępną przestrzeń */
}
.login__page {
  // background-color: blue;
  font-family: $fontAsap;
}

.login {
  overflow: hidden;
  background-color: white;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba($greenSeaweed, 0.2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba($blueQueen, 0.15);
    animation: wawes 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba($greenSeaweed, 0.2);
    animation: wawes 7s infinite;
  }

  > input {
    font-family: $fontAsap;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px -10px;
  }
}

@keyframes wawes {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
