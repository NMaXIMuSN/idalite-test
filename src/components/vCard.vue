<template>
  <div class="card">
    <div class="card__top">
      <img class="card__img" :src="card.urlImg" alt="img" />
    </div>
    <div class="card__bottom">
      <h2 class="card__title">{{ card.name }}</h2>
      <div class="card__description">{{ card.description }}</div>
      <div class="card__price">{{ card.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 16px;
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__img {
    width: 332px;
    height: 200px;
  }
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3f3f3f;
    margin-bottom: 16px;
  }
  &__description {
    font-size: 16px;
    line-height: 20px;
    color: #3f3f3f;
    margin-bottom: 32px;
    height: 80px;
  }
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
  }
  &__bottom {
    padding: 16px 16px 24px;
  }
}
</style>
