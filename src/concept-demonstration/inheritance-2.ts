import { BaseDocument } from './inheritance'
import { Role, Employee } from '../pr/shared'

class BaseBaseDocument extends BaseDocument {
  public Save() {
    console.log('Extra save')
    super.Save()
  }
}

class Invoice extends BaseBaseDocument {
  name = 'Invoice'
  private amount = 20

  public Approve(owner: Employee): void {
    if (this.amount <= 0) {
      throw Error('Cannot approve invoice without amount')
    }
    super.Approve(owner)
  }
}

class Receipt extends BaseBaseDocument {
  name = 'Receipt'
}

const invoice = new Invoice('Hello')
const receipt = new Receipt('Receipt')
invoice.Approve(new Employee())
receipt.Approve(new Employee())

