// Access level

class A {
  public hello() {
    console.log('Hello world')
  }
}

const sss = new A()
sss.hello()

// Public คือ ทุกคนใช้ได้หมด

// Private คือ เข้าได้เฉพาะ Class ตัวเอง

// Protected คือ เข้าได้เฉพาะ Subclass (ไว้ต่อ)

// กฎ: ใช้ Access level ที่น้อยที่สุดเสมอ

class B {
  private data = 'My data'
  public hello() {
    console.log(this.greetingMessage())
  }

  private greetingMessage() {
    return 'Hello world'
  }
}

new B().hello()
// Private เข้าได้เฉพาะใน Class ของตัวเอง

// Protected

class C {
  public hello() {
    console.log(this.greetingMessage())
  }

  protected greetingMessage() {
    return 'Hello world'
  }
}

class D extends C {
  public superHello() {
    console.log('Hey: ', this.greetingMessage())
  }
}

// Protected = เข้าได้เฉพาะ Class, Subclass

// *** กฎ: ใช้ Access level ที่น้อยที่สุดก่อนเสมอ ***

class E {
  public doSomething() {
    //
  }
}
