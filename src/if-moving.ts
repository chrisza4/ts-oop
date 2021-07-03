function doThis() {
  console.log('doThis')
}
function doThat() {
  console.log('doThat')
}

function doStuff(a: number, b: number) {
  const runner = DoFactory(a, b)
  runner.run()
}

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