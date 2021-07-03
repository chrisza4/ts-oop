// Access level

// Public, Private, Protected

class A {
  public data = 'My data'
  public hello() {
    
  }

  public greetingMessage() {
    return 'Hello world'
  }
}

class B extends A {
  method() {
    this.data
  }
}

const object = new A()
