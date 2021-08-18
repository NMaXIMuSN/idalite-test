<template>
  <label class="label">
    <span> {{ label }}</span>
  </label>
  <input
    class="input"
    :class="{ input__validate: value === '' }"
    type="text"
    :value="value"
    @input="emitInput"
    @blur="value === null ? (value = '') : value"
    :placeholder="placeholder"
  />
  <span class="input__bottom" :class="{ input__validate_bottom: value === '' }"
    >Поле является обязательным</span
  >
</template>

<script>
export default {
  name: "my-input",
  props: {
    number: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      reqired: true,
    },
    placeholder: {
      type: String,
      reqired: true,
    },
    value: {
      type: String,
      reqired: true,
    },
  },
  emits: ["update:value"],
  methods: {
    emitInput(event) {
      let value = event.target.value;
      this.$emit("update:value", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  font-size: 10px;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
  color: #49485e;
  line-height: 13px;
  span {
    position: relative;
    &::before {
      content: "";
      width: 4px;
      height: 4px;
      background: #ff8484;
      border-radius: 4px;
      position: absolute;
      right: -6px;
      top: 0;
    }
  }
}
.input {
  padding: 10px 15px;
  transition: 0.5s;
  font-size: 12px;
  line-height: 15px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  max-width: 284px;
  min-width: 284px;
  border: 1px solid transparent;
  margin-bottom: 4px;
  &::placeholder {
    color: #b4b4b4;
  }
  &__bottom {
    transition: 0.5s;
    color: rgba(255, 132, 132, 1);
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    opacity: 0;
    display: block;
    cursor: default;
    user-select: none;
    margin-bottom: 2px;
  }
  &__validate {
    border: 1px solid #ff8484;
    position: relative;
    &_bottom {
      opacity: 1;
    }
  }
}
</style>
