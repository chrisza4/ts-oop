function doThis() {
  console.log('doThis')
}
function doThat() {
  console.log('doThat')
}

function doStuffOriginal(a: number, b:number) {
  if (a > b) {
    doThis()
  } else {
    doThat()
  }
}

// แม้แต่ if พื้นๆ เราก็สามารถย้ายมาใช้ Factory/Polymorphism ได้

class DoThisRunner {
  run() {
    console.log('doThis')
  }
}
class DoThatRunner {
  run() {
    console.log('doThat')
  }
}

function DoFactory (a: number, b: number) {
  if (a > b) return new DoThisRunner()
  return new DoThatRunner()
}

function doStuffWithFactoryAndInheritance(a: number, b: number) {
  const runner = DoFactory(a, b)
  runner.run()
}