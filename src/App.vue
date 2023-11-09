<template>
  <div id="app">
    <header>
      <NavComponent />
    </header>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import NavComponent from "@/components/nav-component.vue";
import Footer from "@/components/footer-component.vue";

export default {
  components: {
    NavComponent,
    Footer,
  },
};
</script>

<style lang="scss"></style>
