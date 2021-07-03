import { TimedLogger, Logger } from './extends'

// TimedLogger extends Logger
// Logger เป็น Superclass ของ TimedLogger
// TimedLogger เป็น Subclass ของ Logger

// Subclass ใช้แทน Superclass ได้
// Superclass ใช้แทน Subclass ไม่ได้

function iUseTimedLogger(log: TimedLogger) {
  log.appendLog('This log have a timestamp')
  log.flush()
  log.logColor('This is a colorful log')
}

function iUseJustALogger(log: Logger) {
  log.appendLog(`This log should be raw, shouldn't it?`)
  log.flush()
}
const log = new Logger()
const timeLogger = new TimedLogger()
iUseTimedLogger(timeLogger)
