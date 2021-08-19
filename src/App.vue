<template>
  <v-top></v-top>
  <main class="main">
    <div class="container">
      <v-form></v-form>
      <div class="main__wrapper">
        <div class="card__wrapper" v-for="(card, index) in cards" :key="index">
          <transition appear name="spawn">
            <v-card :card="card"></v-card
          ></transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import vForm from "./components/vForm.vue";
import vCard from "./components/vCard.vue";
import { mapState } from "vuex";
import VTop from './components/vTop.vue';

export default {
  components: {
    vForm,
    vCard,
    VTop,
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
.main {
  .container {
    display: flex;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}

.spawn-enter-active {
  transition: 0.5s ease-out;
}
.spawn-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
</style>
