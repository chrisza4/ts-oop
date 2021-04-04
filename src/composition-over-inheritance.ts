import { Employee } from './pr/shared'

interface IApprovable {
  Approve(owner: Employee)
}

class Approver {
  constructor(private doc: IApprovable) {}

  public ApproveDocument(owner: Employee) {
    console.log('Do things here')
  }
}

class Invoice implements IApprovable {
  public Approve(owner: Employee) {
    new Approver(this).ApproveDocument(owner)
  }
}

class Receipt implements IApprovable {
  public Approve(owner: Employee) {
    new Approver(this).ApproveDocument(owner)
  }
}
