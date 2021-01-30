// Class, Object, State, Methods

// Class เป็นเสมือน Prototype แบบหนึ่ง
class Greeting {
  name: string

  constructor(name: string) {
    this.name = name
  }

  greetingMessage(): void {
    // จะ Console.log ตัว name ที่ใส่เข้ามาเสมอ
    console.log(`Hello, ${this.name}`)
  }
}

async function main() {
  // จาก Prototype นี้ เราสามารถสร้างสิ่งที่เรียกว่า Object ได้
  const g1 = new Greeting('Chris')
  const g2 = new Greeting('Mark')
  const g3 = new Greeting('James')

  // g1, g2, g3 คือ Object ที่สร้างจากพิมพ์เขียวที่ชื่อว่า Greeting
  // ในทางเทคนิค เราเรียกว่า Greeting ว่า Class

  g1.greetingMessage()
  g2.greetingMessage()
  g3.greetingMessage()

  // พิมพ์ตาม name ที่ใส่เข้าไป
  // new Greeting()
  // new ClassName --> เรียกว่า Constructor
}

main()

// มีไว้ทำไม? ตัวอย่างใช้งานที่เห็นชัดสุด

class User {
  username: string
  id: number
  email: string
  position: string

  constructor(id: number, username: string, position: string) {
    this.id = id
    this.username = username
    this.position = position
  }

  canManageSomethingSensitive(): boolean {
    // if (this.permission.role)
    if (this.position === 'CEO') {
      return true
    }
    return false
    throw Error('Not implemented')
  }
}

console.log('=================== Section 2 =========================')

const normalUser = new User(1, 'Chris', 'random employee')
const superUser = new User(2, 'Mark', 'CEO')
console.log(
  superUser.canManageSomethingSensitive()
    ? `${superUser.username} can manage sensitive stuff`
    : `${superUser.username} cannot manage sensitive stuff`
)
console.log(
  normalUser.canManageSomethingSensitive()
    ? `${normalUser.username} can manage sensitive stuff`
    : `${normalUser.username} cannot manage sensitive stuff`
)

// ดังนั้น ไม่ว่า User ทุกคนในระบบ จะมี Logic ในการเช็ค canManageSomethingSensitive แบบเดียวกันหมด

// Class เกิดขึ้นจากความต้องการในการทำ Prototype code
