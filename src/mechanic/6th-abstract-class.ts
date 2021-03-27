abstract class AbstractSomething {
  public execute() {
    console.log('Done deal!!')
  }

  abstract c(): void
}

const t = new AbstractSomething()

class Something extends AbstractSomething {}

new Something()
