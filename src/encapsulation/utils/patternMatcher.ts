export default class PatternMatcher {
  constructor(private src: number[], private dest: number[]) {}

  public isSamePattern(): boolean {
    if (this.src.length !== this.dest.length) {
      return false
    }
    for (let i = 0; i < this.src.length; i++) {
      if (this.src[i] !== this.dest[i]) {
        return false
      }
    }
    return true
  }
}
