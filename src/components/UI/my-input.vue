<template>
  <label class="label">
    <span> {{ label }}</span>
  </label>
  <input
    class="input"
    :class="{ input__validate: valid }"
    type="text"
    :value="modelValue"
    @input="emitInput($event)"
    @blur="isValid"
    :placeholder="placeholder"
  />
  <span
    class="input__bottom"
    :class="{ input__validate_bottom: valid }"
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
    modelModifiers: {
      default: () => ({}),
    },
    label: {
      type: String,
      reqired: true,
    },
    placeholder: {
      type: String,
      reqired: true,
    },
    modelValue: String,
  },
  emits: ["update:modelValue"],
  data(){
    return{
      valid: false,
    }
  },
  methods: {
    isValid(event){
      if (event.target.value === "") this.valid = true 
      else this.valid = false
    },
    emitInput(event) {
      this.isValid(event)
      let value = event.target.value;
      if (this.modelModifiers.isNumber) {
        value = value.replace(/\s+/g, "");
        const isOnlyNumbers = /^\d+$/.test(value)
        if (value.length <= 0) {
          value = "";
        } else if (!isOnlyNumbers) {
          event.target.value = this.modelValue;
          return
        } else {
          value = new Intl.NumberFormat("ru").format(+value);
        }
      }

      this.$emit("update:modelValue", value);
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
  min-width: 100%;
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
