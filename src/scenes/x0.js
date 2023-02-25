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

  let camera = new B.UniversalCamera('camera', new B.Vector3(20, 2, -6), scene)
  camera.fov = 1.3
  camera.rotation = new B.Vector3(0, Math.PI / 2, 0)
  camera.speed = 0
  camera.attachControl(canvas, true)

  let pipe = new B.DefaultRenderingPipeline('pipe', true, scene, [camera])
  pipe.samples = 4
  pipe.chromaticAberrationEnabled = true
  pipe.chromaticAberration.aberrationAmount = 6
  pipe.grainEnabled = true
  pipe.grain.animated = true

  // let test = B.MeshBuilder.CreateBox('box', {}, scene)
  // test.position = new B.Vector3(18.7, 12, -19.5)
  // let testmat = new B.StandardMaterial('', scene)
  // testmat.emissiveColor = B.Color3.White()
  // test.material = testmat

  // let hlight = new B.HemisphericLight('hlight', new B.Vector3(1, 1, -1), scene)
  // hlight.intensity = .1

  let lights = [
    {
      light: new B.PointLight('light0', new B.Vector3(4, 12.1, 0), scene),
      intensity: 5,
      diffuse: B.Color3.FromHexString('#ff984f'),
    },
    {
      light: new B.SpotLight('light00', new B.Vector3(4, 12, 0), new B.Vector3(0, -1, 0), Math.PI * .75, 1, scene),
      intensity: 100,
      diffuse: B.Color3.FromHexString('#ff984f'),
    },
    {
      light: new B.PointLight('light1', new B.Vector3(18.7, 12, -19.5), scene),
      intensity: 5,
      diffuse: B.Color3.FromHexString('#ccf3ff'),
    },
  ]
  for (let l of lights) {
    l.hi = true
    l.light.intensity = l.intensity
    l.light.diffuse = l.diffuse
  }

  // let light = new B.DirectionalLight('light', new B.Vector3(-1, -1, 1), scene)
  // light.intensity = 1
  // let shadow = new B.CascadedShadowGenerator(2048, light)
  // shadow.usePercentageCloserFiltering = true
  // // shadow.stabilizeCascades = true
  // shadow.lambda = 1
  // shadow.cascadeBlendPercentage = 0
  // shadow.shadowMaxZ = camera.maxZ
  // shadow.depthClamp = false
  // shadow.autoCalcDepthBounds = true

  // let clheight = 5
  // let cldiam = 1.1
  // let clight = B.MeshBuilder.CreateCylinder('clight', { height: clheight, diameter: cldiam }, scene)
  // clight.position = new B.Vector3(4.3, 8.2, 5)
  // clight.rotation = new B.Vector3(0, 0, Math.PI / 2)

  // let emis = new B.StandardMaterial('emis', scene)
  // emis.emissiveColor = B.Color3.FromHexString('#ff984f')
  // clight.material = emis

  // let csph0 = B.MeshBuilder.CreateSphere('csph0', { diameter: cldiam }, scene)
  // let csph1 = B.MeshBuilder.CreateSphere('csph1', { diameter: cldiam }, scene)
  // csph0.parent = csph1.parent = clight
  // csph0.position = new B.Vector3(0, -clheight / 2 + .1, 0)
  // csph1.position = new B.Vector3(0, clheight / 2 - .1, 0)

  // let gl = new B.GlowLayer('glow', scene, {
  //   mainTextureSamples: 4,
  // })

  let r0a = await B.SceneLoader.ImportMeshAsync('', room0, void 0, scene)
  let r0 = r0a.meshes[0]
  r0.scaling = new B.Vector3(10, 10, -10)

  engine.runRenderLoop(() => {
    let i = 0
    let x
    for (let l of lights) {
      if (i == 1) { }
      else if (l.hi && Math.random() > .99) {
        l.hi = false
        x = .5 + .5 * Math.random()
      }
      else {
        l.hi = true
        x = .9 + .1 * Math.random()
      }
      l.light.intensity = l.intensity * x
      i++
    }

    scene.render()
  })

  addEventListener('resize', _ => {
    engine.resize()
  })

  cb({ engine, scene })
}

export { createScene }