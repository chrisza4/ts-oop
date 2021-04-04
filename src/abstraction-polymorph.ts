// ถ้าเราสร้าง UI Engine

interface DrawableEntity {
  draw(): void
}

class GameRenderer {
  constructor(private entities: DrawableEntity[]) {}

  public render() {
    // Do something
    for (const entity of this.entities) {
      entity.draw() // <---- เรียกใช้อะไรก็ได้ที่มี draw คือ Abstraction
      // เราไม่สนใจว่า entity คืออะไร ขอแค่มี draw พอแล้ว
    }
  }
}

class Character implements DrawableEntity {
  draw() {
    // วาดตัวเอก
  }
}

class Enemy implements DrawableEntity {
  draw() {
    // วาดศัตรู
  }
}

const gameEntities: DrawableEntity[] = [new Character(), new Enemy()]
// ทั้ง Character, Enemy สามารถใช้แทน DrawableEntity ได้ เรียกว่า Polymorphism
const renderEngine = new GameRenderer(gameEntities)
renderEngine.render()

// Child class สามารถใช้แทน Base class ได้เสมอ
// ใน TypeScript มี Type Inference แปลว่าไม่ต้องมี implements ก็ได้
// ซึ่งใน Advance class ผมจะสอนอีกทีว่าใช้ประโยชน์จากมันยังไง
