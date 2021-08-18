<template>
  <button class="button" :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/style.scss' as c;
.button {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  background: c.$button-bg;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 284px;
  transition: 0.5s;
  height: 36px;
  cursor: pointer;
  border-color: transparent;
  outline: none;
  font-family: "Inter", sans-serif;
  &:disabled {
    cursor: default;
    background: c.$button-bg-diseble;
    letter-spacing: -0.02em;
    color: #b4b4b4;
  }
}
</style>
