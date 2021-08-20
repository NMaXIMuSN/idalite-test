<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title">Добавление товара</h2>
      <my-select :textSort="$store.state.sort.sortText" :valuseSort="$store.state.sort.sortCard" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 16px;
    margin-right: 16px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3f3f3f;
  }
}
</style>
