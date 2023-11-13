<template>
  <div>
    <b-toast
      v-for="(toast, i) in toasts"
      :key="i"
      id="my-toast"
      :variant="toast.variant || defaultVariant"
      solid
      visible
    >
      {{ toast.message }}
    </b-toast>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      defaultVariant: "info",
    };
  },
  computed: {
    ...mapState("Toast", ["toasts"]),
  },
};
</script>
