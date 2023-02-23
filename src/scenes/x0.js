import * as B from '@babylonjs/core'
import '@babylonjs/loaders'
import room0 from './assets/room0.glb'
import room1 from './assets/room1.glb'

let createScene = async (canvas, cb = _ => { }) => {
  let dpiScale = 4
  let engine = new B.Engine(canvas, true)
  engine.setHardwareScalingLevel(devicePixelRatio / dpiScale)
  let scene = new B.Scene(engine)
  scene.clearColor = B.Color3.Black().toLinearSpace()

  let camera = new B.UniversalCamera('camera', new B.Vector3(5, 4, -7), scene)
  // camera.fov = 1.5
  camera.attachControl(canvas, true)

  let pipe = new B.DefaultRenderingPipeline('pipe', true, scene, [camera])
  pipe.samples = 4
  pipe.chromaticAberrationEnabled = true
  pipe.chromaticAberration.aberrationAmount = 6
  pipe.grainEnabled = true
  pipe.grain.animated = true

  let light = new B.HemisphericLight('light', new B.Vector3(0, 1, 0), scene)
  // let light = new B.DirectionalLight('light', new B.Vector3(-1, -4, -2), scene)
  // light.intensity = 1.4
  // let shadow = new B.CascadedShadowGenerator(2048, light)
  // shadow.usePercentageCloserFiltering = true
  // // shadow.stabilizeCascades = true
  // shadow.lambda = 1
  // shadow.cascadeBlendPercentage = 0
  // shadow.shadowMaxZ = camera.maxZ
  // shadow.depthClamp = false
  // shadow.autoCalcDepthBounds = true

  // let gl = new B.GlowLayer('glow', scene, {
  //   mainTextureSamples: 4,
  // })

  let r0a = await B.SceneLoader.ImportMeshAsync('', room0, void 0, scene)
  let r0 = r0a.meshes[0]
  r0.scaling = new B.Vector3(10, 10, -10)

  engine.runRenderLoop(() => {
    scene.render()
  })

  addEventListener('resize', _ => {
    engine.resize()
  })

  cb({ engine, scene })
}

export { createScene }