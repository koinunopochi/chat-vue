<template>
  <div class="slider-container">
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      v-model.number="internalValue"
      @input="updateValue"
    />
    <span v-if="showInt">{{ formattedValueInt }}</span>
    <span v-else>{{ formattedValue }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 1,
    },
    stepValue: {
      type: Number,
      default: 0.001,
    },
    showInt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      min: this.minValue * 1000,
      max: this.maxValue * 1000,
      step: this.stepValue * 1000,
      internalValue: 0,
    };
  },
  created() {
    this.internalValue = this.value * 1000;
  },
  computed: {
    formattedValue() {
      return (this.internalValue / 1000).toFixed(3);
    },
    formattedValueInt() {
      return Math.round(this.internalValue / 1000);
    },
  },
  methods: {
    updateValue() {
      this.$emit("input", this.internalValue / 1000);
    },
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue * 1000;
    },
    minValue(newValue) {
      this.min = newValue * 1000;
    },
    maxValue(newValue) {
      this.max = newValue * 1000;
    },
    stepValue(newValue) {
      this.step = newValue * 1000;
    },
  },
};
</script>


<style scoped>
.slider-container {
  display: flex;
  align-items: center;
}
</style>
