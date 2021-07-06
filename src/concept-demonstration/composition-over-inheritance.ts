import { Employee } from '../pr/shared'

interface Approvable {
  Approve(owner: Employee)
}

interface Persistable {
  Save()
}

class StandardApprover {
  constructor(private doc: Approvable) {}

  public ApproveDocument(owner: Employee) {
    // Complicated logic in standard approve
    // ------------------------------------
    console.log('Do things here')
  }
}

class DocumentSaver {
  constructor(private doc: Persistable) {}
  public Save() {
    console.log('Document saved')
  }
}

class Invoice implements Approvable, Persistable {
  public Approve(owner: Employee) {
    new StandardApprover(this).ApproveDocument(owner)
  }

  public Save() {
    return new DocumentSaver(this).Save()
  }
}

class Receipt implements Persistable {
  public Save() {
    return new DocumentSaver(this).Save()
  }
}
