<template>
  <form class="form" @submit.prevent="addCard">
    <my-input
      label="Наименование товара"
      v-model:value="name"
      placeholder="Введите наименование товара"
    ></my-input>
    <my-textarea
      label="Описание товара"
      v-model:value="description"
      placeholder="Введите описание товара"
    ></my-textarea>
    <my-input
      label="Ссылка на изображение товара"
      v-model:value="urlImg"
      placeholder="Введите ссылку"
    ></my-input>
    <my-input
      label="Цена товара"
      v-model:value="price"
      placeholder="Введите цену"
      number
    ></my-input>
    <my-button :disabled="name && urlImg && price ? false : true"
      >Добавить товар</my-button
    >
  </form>
</template>

<script>

export default {
  data() {
    return {
      name: null,
      description: null,
      urlImg: null,
      price: null,
    };
  },
  methods: {
    addCard() {
      this.$store.commit("addCard", {
        name: this.name,
        description: this.description,
        urlImg: this.urlImg,
        price: this.price,
      });
      this.name = null;
      this.description = null;
      this.urlImg = null;
      this.price = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
  padding: 24px;
  display: inline-block;
  margin-right: 16px;
  max-height: 440px;
}
</style>
