<script setup>
import { ref } from 'vue'
import TitleScreen from './TitleScreen.vue';

let fade = ref(true)
</script>

<template>
  <TitleScreen :opacity="fade * 100" :pointer-events="fade ? 'auto' : 'none'" @dblclick="fade = false">
    <h1 text-center>warning</h1>
    <p>contains flashing lights and distorted sounds.</p>
    <p>best experienced with headphones on desktop.</p>
    <p text-center animate-pulse>[double-click to continue]</p>
  </TitleScreen>
</template>