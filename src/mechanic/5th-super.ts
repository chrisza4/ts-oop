// =================================================================

// Super

// สมมติเรามี
class Plus {
  a: number
  b: number

  constructor(a: number, b: number) {
    this.a = a
    this.b = b
  }

  calculate(): number {
    return this.a + this.b
  }
}

// เราเพิ่มความสามารถให้มัน
class PlusAndLog extends Plus {
  calculate(): number {
    const result = super.calculate() // ไปเรียก Plus.calculate โดยใช้ this แบบเดียวกัน
    console.log('Calculating... result = ', result)
    return result
  }
}

const p = new PlusAndLog(4, 5)
p.calculate()
