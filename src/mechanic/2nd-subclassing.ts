// สมมติว่าเรามี Class

class Logger {
  log(msg: string): void {
    console.log(msg)
  }
}

// คนใช้

const log = new Logger()
log.log('Hello world')

// =================================================================

// เราอยากจะบันทึกเวลาด้วย แต่เราไม่อยากจะให้ Code เก่าพัง
// Typescript มีกลไกที่เรียกว่า Subclass (aka. Inheritance, extends)

// class TimedLogger extends Logger {}

// TimedLogger = Logger

// const log2 = new TimedLogger()
// log2.log('Hello world')

// =================================================================

// class TimedLogger extends Logger {
//   // Override method
//   log(msg: string): void {
//     console.log(`${new Date().toISOString()}: ${msg}`)
//   }
// }

// const log2 = new TimedLogger()
// log2.log('Hello world')

// =================================================================

// Class สามารถใช้แทนกันได้

// class TimedLogger extends Logger {
//   // Override method
//   log(msg: string): void {
//     console.log(`${new Date().toISOString()}: ${msg}`)
//   }
// }

// function doSomethingThenLog(a: Logger) {
//   console.log('Done')
//   a.log('And logged')
// }

// doSomethingThenLog(new TimedLogger())

// สมมติคุณมี Framework ที่ต้องการ Log คุณสามารถเปลี่ยนไป Log ในระบบไหนก็ได้

// ===================

// เพิ่ม Method ก็ได้

// class SuperLogger extends Logger {
//   logColor(msg: string): void {
//     console.log('\x1b[36m%s\x1b[0m', msg)
//   }
// }

// function doSomethingThenLog(a: Logger) {
//   console.log('I am doing something.....')
//   console.log('I am done!!')
//   a.log('Now I logged')
// }
// const logger = new SuperLogger()

// doSomethingThenLog(new SuperLogger())
// logger.logColor('Blue one')
// logger.log('Normal message') // <--- ใช้อันเดิมเปะๆ จาก Logger ที่เป็ฯ Base class

/*

กฎพื้นฐาน
- Class ที่ Extends ออกไปสามารถใช้แทน Base class ได้ แต่ Base class ใช้แทนที่ Extends ออกไม่ได้

*/

// =================================================================

// Super

// สมมติเรามี
// class Plus {
//   a: number
//   b: number

//   constructor(a: number, b: number) {
//     this.a = a
//     this.b = b
//   }

//   calculate(): number {
//     return this.a + this.b
//   }
// }

// class PlusAndLog extends Plus {
//   calculate(): number {
//     const result = super.calculate() // ไปเรียก Plus.calculate โดยใช้ this แบบเดียวกัน
//     console.log('Calculating... result = ', result)
//     return result
//   }
// }

// const p = new PlusAndLog(4, 5)
// p.calculate()

// =================================================================

// Interface

interface CalculateAble {
  calculate(a: number, b: number): number
}

class PlusCalc implements CalculateAble {
  calculate(a: number, b: number): number {
    return a + b
  }
}

class MinusCalc implements CalculateAble {
  calculate(a: number, b: number): number {
    return a - b
  }
}

const a: CalculateAble = new MinusCalc()
a.calculate(3, 4)

// การใช้งาน ใช้ทำงานร่วมกันเป็นทีม

interface IRepository {
  findTaskById(id: string)
  updateTask(id: string, task: any)
}

// UI Code
class UI {
  constructor(private repo: IRepository) {}

  save(content: any, id: string) {
    this.repo.updateTask(id, content)
  }
}

class MockRepo implements IRepository {
  findTaskById(id: string) {}
  updateTask(id: string, task: any) {}
}
