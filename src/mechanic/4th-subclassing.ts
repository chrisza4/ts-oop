// สมมติว่าเรามี Class

class Logger {
  protected logBuffer: string[]
  appendLog(msg: string): void {
    this.logBuffer.push(msg)
  }

  flush() {
    for (const msg of this.logBuffer) {
      console.log(msg)
    }
    this.logBuffer = []
  }
}

const log = new Logger()
log.appendLog('Hello world')
log.flush()

// =================================================================

// เราอยากจะบันทึกเวลาด้วย แต่เราไม่อยากจะให้ Code เก่าพัง
// Typescript มีกลไกที่เรียกว่า Subclass (aka. Inheritance, extends)

class TimedLogger extends Logger {
  // Override method
  appendLog(msg: string): void {
    this.logBuffer.push(`${new Date().toISOString()}: ${msg}`)
  }
}

const log2 = new TimedLogger()
log2.appendLog('Hello world')
log2.appendLog('Nice to meet you')
log2.flush()

// สังเกตว่า Flush ยังทำงานเหมือนเดิม

// ถามว่าดียังไง TimedLogger สามารถใช้แทน Logger ได้ เป็นคุณสมบัตินึงที่เรียกว่า Polymorphism

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

// Inheritance เป็นทั้งเรื่องที่ดีและเรื่องที่แย่ ให้ใช้อย่างระมัดระวังเสมอ
