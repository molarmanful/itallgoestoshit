<script>
  import { onMount } from 'svelte'
  import { createScene } from './scenes/x0'
  import WarningScreen from './components/WarningScreen.svelte'
  import SplashScreen from './components/SplashScreen.svelte'

  let bcan
  let fps = 0
  let state = 0
  let clickable = false
  let created = false
  let flow0, flow1

  onMount(_ => {
    createScene(bcan, ({ engine, scene, mustart, loop }) => {
      created = true

      flow0 = _ => {
        mustart()
        setTimeout(_ => {
          clickable = true
        }, 500)
        state++
      }
      flow1 = _ => {
        if (clickable) loop()
        state++
      }

      engine.runRenderLoop(() => {
        scene.render()
      })

      scene.executeWhenReady(_ => {})

      scene.registerAfterRender(_ => {
        fps = engine.getFps() | 0
      })
    })
  })
</script>

<section fl-center>
  <canvas hw-screen outline-0 bind:this={bcan} />
  <span fixed top-0 right-0 text="white 50%">{fps}fps</span>
</section>
<SplashScreen on:click={_ => flow1()} loaded={clickable} fade={state < 2} />
<WarningScreen on:click={_ => flow0()} fade={state == 0} />

<div hidden opacity="0 100" cursor="pointer" pointer-events="auto none" />
