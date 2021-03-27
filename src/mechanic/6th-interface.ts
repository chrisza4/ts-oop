interface CalculateAble {
  calculate(a: number, b: number): number
}

class PlusCalc implements CalculateAble {
  calculate(a: number, b: number): number {
    return a + b
  }
}

class MinusCalc implements CalculateAble {
  calculate(a: number, b: number): number {
    return a - b
  }
}

const a: CalculateAble = new MinusCalc()
a.calculate(3, 4)

// การใช้งาน ใช้ทำงานร่วมกันเป็นทีม

interface IRepository {
  findTaskById(id: string)
  updateTask(id: string, task: any)
}

// UI Code
class UI {
  constructor(private repo: IRepository) {}

  save(content: any, id: string) {
    this.repo.updateTask(id, content)
  }
}

class MockRepo implements IRepository {
  findTaskById(id: string) {}
  updateTask(id: string, task: any) {}
}

// ใน Typescript แค่ Implement เหมือนกันก็ใช้แทนได้เลย

class MultiplayCalc {
  calculate(a: number, b: number): number {
    return a - b
  }
}

const calculator: CalculateAble = new MultiplayCalc()
calculator.calculate(2, 3)

// ใช้ Interface แทน Base class เมื่อทำได้
