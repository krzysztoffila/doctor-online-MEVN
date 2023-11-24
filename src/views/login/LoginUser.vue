<template>
  <div class="login__page flex-container">
    <form class="login" @submit.prevent="submitLogin">
      <input v-model="userData.email" type="text" placeholder="Email" />
      <input v-model="userData.password" type="password" placeholder="Hasło" />
      <b-button pill variant="success" type="submit">Zaloguj</b-button>
    </form>
  </div>
</template>

<script>
import { axiosApi } from "@/axios/axios";
import { mapMutations } from "vuex";
export default {
  ...mapMutations("Toast", ["addToast"]),
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      axiosApi
        .post("/auth/login", this.userData)
        .then((response) => {
          this.$store.commit("Toast/addToast", {
            message: "Użytkownik pomyślnie zalogowany.",
            variant: "success",
          });
          this.$router.push("/aboutus");
          console.log("Zalogowano pomyślnie");
        })
        .catch((error) => {
          console.error(error);
          this.$store.commit("Toast/addToast", {
            message: "Błąd logowania. Sprawdź poprawność danych.",
            variant: "error",
          });
          console.log("Jakiś problem hasło, mail");
        });
    },
  },
};
</script>

<style lang="scss">
$info: rgb(0, 225, 255);
$black: rgb(0, 0, 0);
$white: rgb(255, 255, 255);
$fontAsap: "Asap", sans-serif;

.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.login__header {
  color: $white;
}
.login__page {
  flex: 1;
}
.login__page {
  font-family: $fontAsap;
}

.login {
  overflow: hidden;
  background-color: #0dcaf0;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba($info, 0.2);

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
    background-color: rgba($black, 0.15);
    animation: wawes 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba($info, 0.2);
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
