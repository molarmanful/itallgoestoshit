<script setup>
import { ref, onMounted } from 'vue'
import WarningScreen from './components/WarningScreen.vue'
import SplashScreen from './components/SplashScreen.vue'
import { createScene } from './scenes/x0'

let bcan = ref(null)
let fps = ref(0)
let ready = ref(false)
let start = ref(false)
let mus = ref(_ => { })

onMounted(_ => {
  createScene(bcan.value, ({ engine, scene, mustart, loop }) => {
    engine.runRenderLoop(() => {
      scene.render()
    })

    scene.executeWhenReady(_ => {
      ready.value = true
      mus.value = mustart
      start.value = loop
    })

    scene.registerAfterRender(_ => {
      fps.value = engine.getFps() | 0
    })
  })
})
</script>

<template>
  <section fl-center>
    <canvas ref="bcan" hw-screen outline-0></canvas>
    <span fixed top-0 right-0 text="white 50%">{{ fps }}fps</span>
  </section>
  <SplashScreen @click="start && start()" :loaded="+!!start" />
  <WarningScreen @dblclick="mus()" />
  <div hidden opacity="0 100" pointer-events="auto none" />
</template>