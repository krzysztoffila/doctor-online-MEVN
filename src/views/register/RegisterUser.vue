<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Witamy</h3>
        <p>Posiadasz juz konto?</p>
        <router-link to="/login">
          <input type="submit" name="" value="Zaloguj" />
        </router-link>
        <br />
      </div>
      <form
        class="col-md-9 register-right"
        @submit.prevent="submitRegistration"
      >
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3 class="register-heading">Wypełnij Dane:</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="userData.firstName"
                    type="text"
                    class="form-control"
                    placeholder="Imię *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.lastName"
                    type="text"
                    class="form-control"
                    placeholder="Nazwisko *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.password"
                    type="password"
                    class="form-control"
                    placeholder="Hasło *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.confirmPassword"
                    type="password"
                    class="form-control"
                    placeholder="Potwierdź hasło *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <div class="maxl">
                    <label class="radio inline">
                      <input
                        type="radio"
                        v-model="userData.gender"
                        value="male"
                        checked
                      />
                      <span> Mezczyzna </span>
                    </label>
                    <label class="radio inline">
                      <input
                        type="radio"
                        v-model="userData.gender"
                        value="female"
                      />
                      <span>Kobieta </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="userData.email"
                    type="email"
                    class="form-control"
                    placeholder="Twój Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.phoneNumber"
                    type="text"
                    minlength="9"
                    maxlength="9"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Numer telefonu *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.pesel"
                    type="text"
                    minlength="11"
                    maxlength="11"
                    name="txtPesel"
                    class="form-control"
                    placeholder="PESEL *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="userData.city"
                    type="text"
                    class="form-control"
                    placeholder="Miasto *"
                    value=""
                  />
                </div>
                <input
                  type="submit"
                  class="btnRegister"
                  value="Rejestruję się"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
        </div>
      </form>
    </div>
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
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        email: "",
        phoneNumber: "",
        pesel: "",
        city: "",
      },
    };
  },

  methods: {
    async submitRegistration() {
      try {
        const response = await axiosApi.post("/auth/register", this.userData, {
          withCredentials: true,
        });
        this.$store.commit("Toast/addToast", {
          message: response.data,
          variant: "success",
        });
      } catch (error) {
        this.$store.commit("Toast/addToast", {
          message: `Błąd rejestracji: ${error}`,
          variant: "danger",
        });
      } finally {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.register {
  border: 1px solid black;
  background: -webkit-linear-gradient(left, #0dcafd, #00c6ff);
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #ffc107;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #198754;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
</style>
