<template>
  <div id="app">
    <v-top></v-top>
    <main class="main">
      <v-form></v-form>
      <div class="main__wrapper">
        <transition-group name="card-list">
          <v-card v-for="card in sortCard" :key="card.id" :card="card"></v-card>
        </transition-group>
      </div>
    </main>
  </div>
</template>

<script>
import vForm from "./components/vForm.vue";
import vCard from "./components/vCard.vue";
import { mapState } from "vuex";
import VTop from "./components/vTop.vue";

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
    sortCard() {
      const card = [...this.cards];
      switch (this.$store.state.sort.sortCard) {
        case 0:
          return card.sort((a, b) => a.id - b.id);
        case 1:
          return card.sort((a, b) => a.price - b.price);
        case 2:
          return card.sort((a, b) => b.price - a.price);
        default:
          return card.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("card"))
      this.$store.commit("getCard", JSON.parse(localStorage.getItem("card")));
  },
};
</script>

<style lang="scss" scoped>
#app {
  max-width: 1376px;
  margin: 0 auto;
  display: block;
  .main {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 332px 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 16px;
      @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 920px) {
        grid-template-columns: 1fr;
      }
    }
  }
}

.card-list-move {
  transition: transform 0.8s ease;
}
.card-list-leave-active,
.card-list-enter-active {
  transition: 0.5s ease-out;
}

.card-list-enter-from,
.card-list-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
