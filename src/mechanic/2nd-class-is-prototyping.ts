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
  }
}

// console.log('=================== Section 2 =========================')

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
