class StringUtils {
  static n(str: string[]): string {
    throw Error('Not implemented')
  }

  m(): string {}
}

new StringUtils().m()

// เนื่องจากว่า static method สร้างได้โดยไม่ต้องมี new มันก็จะเข้าถึง this ไม่ได้
// ใช้จัดกลุ่มของ Methods
// Depend on state: Normal
// Not depend on stathe: Static

function n() {}
