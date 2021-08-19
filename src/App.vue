<template>
  <v-top></v-top>
  <main class="main">
    <div class="container">
      <v-form></v-form>
      <div class="main__wrapper">
        <transition-group name="card-list">
          <div class="card__wrapper" v-for="card in sortCard" :key="card.id">
            <transition appear name="spawn">
              <v-card :card="card"></v-card
            ></transition>
          </div>
        </transition-group>
      </div>
    </div>
  </main>
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
          return card.sort((a, b) => a.id - b.id);;
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
  mounted(){
    if (localStorage.getItem('card'))
      this.$store.commit('getCard', JSON.parse(localStorage.getItem('card')))
    if (localStorage.getItem('idCard'))
      this.$store.commit('getIdCard', +localStorage.getItem('idCard'))
  }
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

.card-list-move {
  transition: transform 0.8s ease;
}

.spawn-enter-active {
  transition: 0.5s ease-out;
}
.spawn-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
</style>
