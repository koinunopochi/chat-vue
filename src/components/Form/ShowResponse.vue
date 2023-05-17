<template>
  <div class="response_group">
    <h3>レスポンス</h3>
    <span v-if="messages">User:{{ messages }}</span> <br>
    <span v-if="fetchedData">assistant:{{ fetchedData.responses.messages[0].result.content }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fetchedData: null,
      messages: '',
    };
  },
  props: ['fetchedData',"messages"],
};
</script>
<style scoped>
.response_group {
  background-color: #fff;
  margin-top: 50px;
  margin-right: 15px;
  width: 300px;
  height: 800px;
  overflow: auto; /**コンテナサイズを超えた場合スクロールバーを表示する */
}
</style>
