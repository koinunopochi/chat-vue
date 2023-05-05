<script setup>
defineProps({
  apiKey: String,
  model: String,
  temperature: String,
  top_p: String,
  n: String,
  stop: String,
  max_tokens: String,
  presence_penalty: String,
  frequency_penalty: String,
  logit_bias: String,
});

defineEmits([
  'update:apiKey',
  'update:model',
  'update:temperature',
  'update:top_p',
  'update:n',
  'update:stop',
  'update:max_tokens',
  'update:presence_penalty',
  'update:frequency_penalty',
  'update:logit_bias',
]);
</script>

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
      <div class="form-change">
        <label for="temperature">temperature:</label>
        <div class="input-wrapper">
          <input
            type="text"
            id="temperature"
            name="temperature"
            :value="temperature"
            @input="$emit('update:temperature', $event.target.value)"
            class="input-field"
            placeholder="Please input number, 0~2"
          />
        </div>
        <label for="top_p">top_p:</label>
        <div class="input-wrapper">
          <input
            type="text"
            id="top_p"
            name="top_p"
            :value="top_p"
            @input="$emit('update:top_p', $event.target.value)"
            class="input-field"
            placeholder="Please input number, 0~1"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="n">n:</label>
        <input
          type="text"
          id="n"
          name="n"
          :value="n"
          @input="$emit('update:n', $event.target.value)"
          placeholder="Please input integer"
        />
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
        <label for="max_tokens">max_tokens</label>
        <input
          type="text"
          id="max_tokens"
          name="max_tokens"
          :value="max_tokens"
          @input="$emit('update:max_tokens', $event.target.value)"
          placeholder=" Maximum value of 4096"
        />
      </div>
      <div class="form-group">
        <label for="presence_penalty">presence_penalty:</label>
        <input
          type="text"
          id="presence_penalty"
          name="presence_penalty"
          :value="presence_penalty"
          @input="$emit('update:presence_penalty', $event.target.value)"
          placeholder="Please input number, -2.0~2.0"
        />
      </div>
      <div class="form-group">
        <label for="frequency_penalty">frequency_penalty:</label>
        <input
          type="text"
          id="frequency_penalty"
          name="frequency_penalty"
          :value="frequency_penalty"
          @input="$emit('update:frequency_penalty', $event.target.value)"
          placeholder="Please input number, -2.0~2.0"
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
    </form>
  </div>
</template>
<script>
import { ref } from 'vue';
const model = ref('gpt-3.5-turbo');
const temperature = ref('0'); //デプロイ時は、''にする
//const stop = ref('');
export default {
  data() {
    return {
      options: [
        { value: 'gpt-3.5-turbo', text: 'gpt-3.5-turbo' },
        { value: 'gpt-4', text: 'gpt-4' },
      ],
    };
  },
};
</script>
<style scoped>
/* フォームのスタイル */
form {
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
