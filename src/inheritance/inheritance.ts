import { Role, Employee } from '../abstraction-polymorph/shared'

export abstract class BaseDocument {
  constructor(private description: string) {}
  protected name = 'Nothing'

  protected Save(): void {
    // Save to database
    // ......
    console.log(`Document ${this.name} saved at ${new Date().toISOString()}`)
  }

  public Approve(owner: Employee): void {
    this.Save()
    console.log(`${this.name} approved`)
  }
}

class Invoice extends BaseDocument {
  name = 'Invoice'
  private amount = 20
}

class Receipt extends BaseDocument {
  name = 'Receipt'
}

class Memo extends BaseDocument {
  public Approve() {
    throw Error('Approve not support')
  }
}

const invoice = new Invoice('Hello')
const receipt = new Receipt('Receipt')
invoice.Approve(new Employee())
receipt.Approve(new Employee())

