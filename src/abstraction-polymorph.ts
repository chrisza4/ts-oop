interface DrawableEntity {
  draw(x: number, y: number): void
}

// =========================================
// ทีมทำงานระบบเกม
// =========================================
class GameRenderer {
  private x: number = 0
  private y: number = 0
  
  constructor(private entities: DrawableEntity[]) {}

  public render() {
    for (const entity of this.entities) {
      entity.draw(this.x, this.y)
    }
  }
}

// =========================================
// ทีมทำงานศิลป์
// =========================================
class CharacterSkin1 implements DrawableEntity {
  draw(x: number, y: number) {
    // วาดตัวเอก
  }
}

class CharacterSkin2 implements DrawableEntity {
  draw(x: number, y: number) {
    // วาดตัวเอก
  }
}

// =========================================
// ประกอบร่าง
// =========================================

const gameEntities: DrawableEntity[] = [new CharacterSkin1(), new CharacterSkin2()]
// ทั้งสองสกินสามารถใช้แทน DrawableEntity ได้ เรียกว่า Polymorphism
const renderEngine = new GameRenderer(gameEntities)
renderEngine.render()
