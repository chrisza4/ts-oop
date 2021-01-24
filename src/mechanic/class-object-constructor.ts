import { readLine, close } from './readline'

// Class, Object, State, Methods

class Greeting {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  greetingMessage(): void {
    console.log(`Hello, ${this.name}`)
  }
}

async function main() {
  const g1 = new Greeting('Chris')
  const g2 = new Greeting('Mark')
  const g3 = new Greeting('James')

  g1.greetingMessage()
  g2.greetingMessage()
  g3.greetingMessage()
}

main()
