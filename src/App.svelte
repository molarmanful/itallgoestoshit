<script>
  import { onMount } from 'svelte'
  import { createScene } from './scenes/x0'
  import WarningScreen from './components/WarningScreen.svelte'
  import SplashScreen from './components/SplashScreen.svelte'

  let fade = false
  let bcan
  let fps = 0
  let state = 0
  let ready0 = false
  let ready1 = false
  let flow0, flow1

  onMount(_ => {
    fade = true
    createScene(bcan, ({ engine, scene, music, loop }) => {
      flow0 = _ => {
        if (ready0) {
          music.play()
          setTimeout(_ => {
            ready1 = true
          }, 500)
          state++
        }
      }
      flow1 = _ => {
        if (ready1) {
          loop()
          state++
        }
      }

      scene.executeWhenReady(_ => {
        setTimeout(_ => {
          ready0 = true
        }, 1000)
      })

      scene.registerAfterRender(_ => {
        fps = engine.getFps() | 0
      })
    })
  })
</script>

<main {fade} ofade-1000>
  <section fl-center>
    <canvas hw-screen outline-0 bind:this={bcan} />
    <span fixed top-0 right-0 text="white 50%">{fps}fps</span>
  </section>
  <SplashScreen on:click={_ => flow1()} loaded={ready1} fade={state < 2} />
  <WarningScreen on:click={_ => flow0()} loaded={ready0} fade={state == 0} />
</main>

<div
  hidden
  opacity="0 100"
  cursor="pointer default"
  pointer-events="auto none"
  fade="true false"
/>
