<template>
  <div>
    <a
      ref="twitterTimeline"
      class="twitter-timeline"
      href="https://twitter.com/a1a2a3b1b2b3b4?ref_src=twsrc%5Etfw"
      >Tweets by home</a
    >
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    this.$refs.twitterTimeline.parentNode.appendChild(script);
  },
};
</script>

<style scoped>
div{
  margin-top: 50px;
  margin-right:15px ;
  width: 300px;
  height: 800px;
  overflow: auto;/**コンテナサイズを超えた場合スクロールバーを表示する */
}
</style>

