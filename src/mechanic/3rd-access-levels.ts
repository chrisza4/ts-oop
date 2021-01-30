// Access level

class A {
  public hello() {
    console.log('Hello world')
  }
}

new A().hello()

// Public คือ ทุกคนใช้ได้หมด

// Private

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