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
      <MainForm />
    </div>
    <TwitterEmbedded />
    <TheFooter />
  </div>
</template>
<style>
.wrap{
  background-color: #caf997;
  align-items: center;
}
.main{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
