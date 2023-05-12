<template>
  <div class="response_group">
    <h3>レスポンス</h3>

    <p>User:</p>
    <!--TODO:fetchDataがなければ問題なく動作するが、あると動作しない fetcedDataだけであれば動作することから、propsでの受け取り方を特定の使用用に変更するか、ifでfetchedDataに中味がない場合はescapeするなどの処理を行う必要がある-->
    <!-- propsの中味を複数のものに変更したが、requestがないとでたため、×-->
    <!--エスケープ処理を実走する必要がある-->
    <p>{{ fetchedData }}</p>
    <span id="data">{{ value }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  props: ['fetchedData'],
  methods: {
    //fetchedDataがない場合は、エスケープ処理を行う
    escapeData() {
      const spanElement = document.getElementById('data'); //この部分がエラーになる
      if (spanElement) {
        spanElement.textContent = 'New Value';
      }
      if (this.fetchedData == null) {
        return;
      }
    },
  },
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
