import { Role, Employee } from './pr/shared'

abstract class BaseDocument {
  constructor(private description: string) {}
  protected name = 'Nothing'

  protected Save(): void {
    console.log(`Document saved`)
  }

  public Approve(owner: Employee): void {
    this.Save()
    console.log(`${this.name} approved`)
  }
}

class Invoice extends BaseDocument {
  name = 'Invoice'
  private amount = 0

  public Approve(owner: Employee): void {
    if (this.amount <= 0) {
      throw Error('Cannot approve invoice without amount')
    }
    super.Approve(owner)
  }
}

class Receipt extends BaseDocument {
  name = 'Receipt'
}

const invoice = new Invoice('Hello')
const receipt = new Receipt('Receipt')
invoice.Approve(new Employee())
receipt.Approve(new Employee())
