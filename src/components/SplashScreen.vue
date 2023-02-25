<script setup>
import { ref } from 'vue'
import TitleScreen from './TitleScreen.vue';

let fade = ref(true)
defineProps(['loaded'])
</script>

<template>
  <TitleScreen bg="black/69" :opacity="fade * 100" :cursor="+loaded ? 'pointer' : 'default'"
    :pointer-events="fade ? 'auto' : 'none'" @click="fade = false">
    <h1 text-center>memorylane</h1>
    <p text-center animate-pulse>[{{ +loaded ? 'click to start' : 'loading...' }}]</p>
  </TitleScreen>
</template>