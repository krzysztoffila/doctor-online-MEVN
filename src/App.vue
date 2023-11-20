<template>
  <div id="app">
    <header>
      <NavComponent />
      <Toast />
    </header>
    <main>
      <router-view> </router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import NavComponent from "@/components/nav-component.vue";
import Footer from "@/components/footer-component.vue";
import Toast from "@/components/toast/toast-component.vue";

export default {
  components: {
    NavComponent,
    Footer,
    Toast,
  },
};
</script>

<style lang="scss"></style>
