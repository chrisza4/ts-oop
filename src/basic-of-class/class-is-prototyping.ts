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
    if (this.position === 'CEO') {
      return true
    }
    return false
  }
}

const normalUser = new User(1, 'Chris', 'random employee')
const superUser = new User(2, 'Mark', 'CEO')

if (superUser.canManageSomethingSensitive()) {
  console.log(`${superUser.username} can manage sensitive stuff`)
} else {
  console.log(`${superUser.username} cannot manage sensitive stuff`)
}

if (normalUser.canManageSomethingSensitive()) {
  console.log(`${normalUser.username} can manage sensitive stuff`)
} else {
  console.log(`${normalUser.username} cannot manage sensitive stuff`)
}

// ดังนั้น ไม่ว่า User ทุกคนในระบบ จะมี Logic ในการเช็ค canManageSomethingSensitive แบบเดียวกันหมด

// Class เกิดขึ้นจากความต้องการในการทำ Prototype code
// Class จะล้อมข้อมูลไว้ ทำให้คนเข้าถึงข้อมูลได้ผ่าน Method เท่านั้น
// Method ก็คือการส่ง Message หากันนั่นเอง
