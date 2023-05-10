<template>
  <div id="app">
    <form>
      <h3>Parameter</h3>
      <div class="form-group">
        <label for="apiKey">API_KEY:</label>
        <input
          type="password"
          id="apiKey"
          :value="apiKey"
          @input="$emit('update:apiKey', $event.target.value)"
          placeholder="Please input your API_KEY."
        />
      </div>
      <div class="form-group">
        <label for="model" class="form-label">model:</label>
        <select
          id="model"
          class="form-select"
          :value="model"
          @input="$emit('update:model', $event.target.value)"
        >
          <option disabled value="">Please choose</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="stop">stop:</label>
        <input
          type="text"
          id="stop_"
          name="stop"
          :value="stop"
          @input="$emit('update:stop', $event.target.value)"
          placeholder="未調整"
        />
      </div>
      <div class="form-group">
        <label for="logit_bias">logit_bias:</label>
        <input
          type="text"
          id="logit_bias"
          name="logit_bias"
          :value="logit_bias"
          @input="$emit('update:logit_bias', $event.target.value)"
          placeholder="未調整"
        />
      </div>
      <div v-for="(value, index) in sliderValues" :key="index">
        <label>{{ parmName[index] }}:</label>
        <SliderContainerVue
          :value="sliderValues[index]"
          :min-value="sliderRanges[index].min"
          :max-value="sliderRanges[index].max"
          :step-value="sliderRanges[index].step"
          :show-int="showIntValues[index]"
          @input="updateSliderValue(index, $event)"
        />
      </div>
    </form>
  </div>
</template>
<script>
import SliderContainerVue from './SliderContainer.vue';
import { ref } from 'vue';

export default {
  components: {
    SliderContainerVue,
  },
  props: {
    apiKey: String,
    model: String,
    stop: String,
    logit_bias: String,
  },
  emits: ['update:apiKey', 'update:model', 'update:stop', 'update:logit_bias'],
  data() {
    return {
      options: [
        { value: 'gpt-3.5-turbo', text: 'gpt-3.5-turbo' },
        { value: 'gpt-4', text: 'gpt-4' },
      ],
    };
  },
  setup(props, { emit }) {
    const model = ref(props.model);

    const parmName = [
      'temperature',
      'top_p',
      'n',
      'max_tokens',
      'presence_penalty',
      'frequency_penalty',
    ];
    const sliderValues = [0.5, 1, 1, 4096, 0, 0];
    const sliderRanges = [
      { min: 0, max: 2, step: 0.001 },
      { min: 0, max: 2, step: 0.001 },
      { min: 1, max: 10, step: 1 },
      { min: 1, max: 4096, step: 1 },
      { min: -2, max: 2, step: 0.001 },
      { min: -2, max: 2, step: 0.001 },
    ];
    const showIntValues = [false, false, true, true, false, false];

    const updateSliderValue = (index, value) => {
      sliderValues[index] = value;
      emit(`update:${parmName[index]}`, value);
    };

    return {
      model,
      parmName,
      sliderValues,
      sliderRanges,
      showIntValues,
      updateSliderValue,
    };
  },
};
</script>
<style scoped>
/* フォームのスタイル */
form {
  background-color: #fff;
  width: 300px;
  padding: 30px;
  padding-bottom: 30px; /**ここで、ボタンがはみ出るかどうかの調整 */
  margin: 50px auto;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
/* ラベルのスタイル */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
/* 入力欄のスタイル */
input[type='text'],
input[type='password'],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
textarea {
  height: 200px;
  resize: none;
}
/* スペース調整 */
.form-group {
  margin-bottom: 20px;
}
.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  float: right;
  margin-bottom: 5px;
}
.form-select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
</style>
