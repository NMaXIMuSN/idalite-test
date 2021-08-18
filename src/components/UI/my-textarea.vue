<template>
  <label class="label">
    <span> {{ label }}</span>
  </label>
  <textarea class="textarea" v-model="value" @input="emitInput" :placeholder="placeholder"> </textarea>
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
    value: {
      type: String,
      reqired: true,
    },
  },
  emits: ["update:value"],
  methods: {
    emitInput(event) {
      this.$emit("update:value", event.target.value);
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
  width: 284px;
  height: 108px;
  max-width: 284px;
}
</style>
