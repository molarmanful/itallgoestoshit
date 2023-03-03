self.onmessage = e => {
  let d = e.data.deltaTime * 1000
  let prev = performance.now()

  while (1) {
    let now = self.performance.now()
    if (now > prev + d) {
      prev = now
      self.postMessage("fixedUpdate")
    }
  }
}