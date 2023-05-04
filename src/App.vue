<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import SetUpParm from './components/SetUpParm.vue';
import SendMessage from './components/SendMessage.vue';
import TwitterEmbedded from './components/TwitterEmbedded.vue';
</script>
<template>
  <div class="wrap">
    <TheHeader />
    <div class="main">
      <TwitterEmbedded />
      <SendMessage />
      <SetUpParm />
    </div>
    <TheFooter />
  </div>
</template>
<style>
.wrap{
  align-items: center;
}
.main{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
