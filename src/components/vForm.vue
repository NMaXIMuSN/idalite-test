<template>
  <form class="form" @submit.prevent="addCard">
    <div class="form__wrapper">
      <my-input
        label="Наименование товара"
        v-model="name"
        placeholder="Введите наименование товара"
      ></my-input>
      <my-textarea
        label="Описание товара"
        v-model="description"
        placeholder="Введите описание товара"
      ></my-textarea>
      <my-input
        label="Ссылка на изображение товара"
        v-model="urlImg"
        placeholder="Введите ссылку"
      ></my-input>
      <my-input
        label="Цена товара"
        v-model.isNumber="price"
        placeholder="Введите цену"
      ></my-input>
      <my-button :disabled="name && urlImg && price ? false : true"
        >Добавить товар</my-button
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      urlImg: "",
      price: "",
    };
  },
  methods: {
    validatPrice() {
      this.price = "aw";
    },
    addCard() {
      this.$store.state.idCard += 1;
      this.$store.commit("addCard", {
        name: this.name,
        description: this.description,
        urlImg: this.urlImg,
        price: this.formatPrice,
        id: new Date(),
      });
      this.name = "";
      this.description = "";
      this.urlImg = "";
      this.price = "";
    },
  },
  computed: {
    formatPrice() {
      return +this.price.replace(/\s/gm, "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.form {
  background-color: $main-bg-colot;
  padding: 24px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  max-height: 440px;
}
</style>
