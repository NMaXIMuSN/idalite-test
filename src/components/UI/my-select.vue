<template>
  <div class="select__wrapper">
    <div
      class="select"
      ref="select"
      :class="{ select_active: show }"
      @click="show = !show"
    >
      {{ textSort[valuseSort] }}
    </div>
    <transition name="sort">
      <div v-if="show" class="select__options_wrapper">
        <div
          v-for="(text, index) in textSort"
          :key="index"
          class="select__options"
          @click="newSort(index)"
        >
          {{ text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "my-select",
  data() {
    return { show: false };
  },
  props: {
    textSort: {
      type: Object,
    },
    valuseSort: {
      type: Number,
    },
  },
  methods: {
    newSort(index) {
      this.show = false;
      this.$store.commit("newSort", index);
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", (item) => {
      if (item.target !== vm.$refs["select"]) vm.show = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.select {
  background: #fffefb;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 140px;
  text-align: center;
  position: relative;
  z-index: 1001;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-image: url("./../../assets/img/arrowSelect.svg");
    background-position: center center;
    background-size: cover;
    right: 8px;
    transform: translateY(-50%) rotate(90deg);
    top: 50%;
    transition: transform 0.5s ease;
  }
  &_active::after {
    transform: translateY(-50%) rotate(0deg);
  }
  &__wrapper {
    position: relative;
  }
  &__options {
    background: #fffefb;
    padding: 3px 16px;
    font-size: 13px;
    color: #b4b4b4;
    width: 140px;
    cursor: pointer;
    &:hover {
      background: #e7e6e2;
    }
    &_wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
    }
  }
}
.sort-enter-active,
.sort-leave-active {
  transition: 0.5s ease;
}

.sort-enter-from,
.sort-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
