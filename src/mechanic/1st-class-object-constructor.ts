// Class, Object, State, Methods

// Class เป็นเสมือน Prototype แบบหนึ่ง
class Greeting {
  name: string // <------ สิ่งนี้เรียกว่า Field หรือก็คือข้อมูลนั่นเอง
  // Class เป็น ต้นแบบในการสร้าง Object

  constructor(name: string) {
    this.name = name
  }

  // Method หรือวิธีการส่ง Message เข้า Object นั้นๆ
  greetingMessage(): void {
    // จะ Console.log ตัว name ที่ใส่เข้ามาเสมอ
    console.log(`Hello, ${this.name}`)
  }

  changeNameToCelebrity() {
    this.name = 'Mark Zuckerburg' // เปลี่ยนข้อมูลผ่าน Method
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
  g3.changeNameToCelebrity()
  g3.greetingMessage()

  // พิมพ์ตาม name ที่ใส่เข้าไป
  // new Greeting()
  // new ClassName --> เรียกว่า Constructor
}

main()
