<template>
  <div id="app">
    <header>
      <NavComponent />
    </header>
    <main>
      <router-view>
        <RegisterUser />
      </router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import NavComponent from "@/components/nav-component.vue";
import Footer from "@/components/footer-component.vue";
import RegisterUser from "./views/register/RegisterUser.vue";

export default {
  components: {
    NavComponent,
    RegisterUser,
    Footer,
  },
};
</script>

<style lang="scss"></style>
