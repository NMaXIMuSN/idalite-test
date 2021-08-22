<template>
  <label class="label">
    <span> {{ label }}</span>
  </label>
  <textarea class="textarea" :value="modelValue" @input="emitInput" :placeholder="placeholder"> </textarea>
</template>

<script>
export default {
  name: "my-textarea",
  props: {
    label: {
      type: String,
      reqired: true,
    },
    placeholder: {
      type: String,
      reqired: true,
    },
    modelValue: {
      type: String,
      reqired: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitInput(event) {
      this.$emit("update:modelValue", event.target.value);
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
}

.textarea {
  background: #fffefb;
  outline: none;
  border-color: transparent;
  resize: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 15px;
  min-width: 100%;
  height: 108px;
  max-width: 284px;
  &::placeholder {
    color: #b4b4b4;
  }
}
</style>
