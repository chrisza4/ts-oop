class Greeting {
  name = 'This is just a placeholder'

  constructor(initialName: string) {
    this.name = initialName
  }

  greetingMessage(): void {
    console.log(`Hello, ${this.name}`)
  }

  changeNameToCelebrity(to: string) {
    this.name = to
  }
}

class Main {
  public run() {
    const g1 = new Greeting("RealUser")
    g1.greetingMessage()
    g1.name = "SomeName"
    g1.greetingMessage()

    g1.changeNameToCelebrity('Mark Zuckerberg')
    g1.greetingMessage()

    const g2 = new Greeting("Skooldio")
    g2.changeNameToCelebrity('Skooldio')
    g2.greetingMessage()

    g1.greetingMessage()
  }
}

new Main().run()
