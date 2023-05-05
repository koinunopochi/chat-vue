<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

import TwitterEmbedded from './components/TwitterEmbedded.vue';

import MainForm from './components/Form/MainForm.vue';
</script>
<template>
  <div class="wrap">
    <TheHeader />
    <div class="main">
      <TwitterEmbedded />
      <MainForm />
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
