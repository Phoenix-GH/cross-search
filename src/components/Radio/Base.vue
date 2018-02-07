<template>
  <label class="Label">
    <input
      type="radio"
      class="sort-selection"
      :value="value"
      :class="radioClasses"
      :name="inputName"
      @input="updateValue()"
      ref="radioPicker"
    />
    <span class="Name">{{name}}</span>
    {{value}}
  </label>
</template>
<script>
export default {
  props: ['name', 'radioClasses', 'inputName', 'value'],
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.radioPicker.value);
    },
  },
};
</script>

<style lang="stylus" scoped>

.Label
  display flex
  align-items center
  cursor pointer

.Name
  margin-left 5px

.sort-selection {
  -webkit-appearance: none;
  -moz-appearance: none;
}

.sort-selection + * {
  padding: 0 8px;
  cursor: pointer;
  border-bottom: 2px dotted rgba(192, 192, 192, .3);
}

.sort-selection:checked + * {
  background-color: rgba(192, 192, 192, .3);
  border-color: transparent;
}
</style>
