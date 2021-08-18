<template>
  <main class="main">
    <div class="container">
      <v-form></v-form>
      <div class="main__wrapper">
        <v-card v-for="(card, index) in cards" :key="index" :card="card"></v-card>
      </div>
    </div>
  </main>
</template>

<script>
import vForm from "./components/vForm.vue";
import vCard from "./components/vCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    vForm,
    vCard,
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapState({
      cards: (state) => state.card,
    }),
  },
};
</script>

<style lang="scss" scoped>
.main{
  .container{
    display: flex;
  }
  &__wrapper{
    display: flex;
    flex-wrap: wrap;
    
  }
}
</style>
