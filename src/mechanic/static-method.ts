class StringUtils {
  static StaticMethod(str: string[]) {
    console.log('Static method called', str.join(', '))
  }

  NormalMethod() {
    console.log('Method called')
  }
}

StringUtils.StaticMethod(['a', 'b'])
const obj2 = new StringUtils()
obj2.NormalMethod()
