import { Role, Employee } from './pr/shared'

abstract class BaseDocument {
  constructor(private description: string) {}

  public Approve(owner: Employee): void {
    console.log('Approve document')
  }
}

class Invoice extends BaseDocument {}

class Receipt extends BaseDocument {}

const invoice = new Invoice('Hello')
const receipt = new Receipt('Receipt')
invoice.Approve(new Employee())
receipt.Approve(new Employee())
