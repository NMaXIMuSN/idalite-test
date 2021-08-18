<template>
  <main class="main">
    <div class="container">
      <v-form></v-form>
    </div>
  </main>
</template>

<script>
import vForm from "./components/vForm.vue";
export default {
  components: {
    vForm,
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style></style>
