interface Approvable {
  Approve(approverName: string): void
}
interface Printable {
  Print(): void
}

function confirm(doc: Approvable) {
  doc.Approve('Chris')
}

class Receipt {
  Approve(approverName: string): void {
    console.log('Receipt approved')
  }
  Print() {
    console.log('Receipt printed')
  }
}

class Invoice implements Approvable {
  Approve(approverName: string): void {
    console.log('Invoice approved')
  }
}

confirm(new Receipt())
confirm(new Invoice())