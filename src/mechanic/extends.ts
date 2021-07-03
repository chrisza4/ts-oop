// สมมติว่าเรามี Class
export class Logger {
  protected logBuffer: string[] = []

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

const logger = new Logger()
logger.appendLog('Hello world')
logger.flush()

export class TimedLogger extends Logger {
  appendLog(msg: string): void {
    this.logBuffer.push(`${new Date().toISOString()}: ${msg}`)
  }

  logColor(msg: string): void {
    console.log('\x1b[36m%s\x1b[0m', msg)
  }
}

const timeLogger = new TimedLogger()
timeLogger.appendLog('Hello world')
timeLogger.appendLog('Nice to meet you')
timeLogger.flush()
timeLogger.logColor('Colorful log')

//   logColor(msg: string): void {
//     console.log('\x1b[36m%s\x1b[0m', msg)
//   }








