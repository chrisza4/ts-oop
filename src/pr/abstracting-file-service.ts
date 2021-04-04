import fs from 'fs'
import * as uuid from 'uuid'
import * as Minio from 'minio'

const Env = process.env['NODE_ENV']

enum Role {
  Manager,
  Employee,
  CLevel,
}
class Employee {
  Role: Role

  public isRoleHigherThan(role: Role): boolean {
    return true
  }
}

class PurchaseRequest {
  private description: string
  private owner: Employee
  private amount: number
  private fileContent: Buffer
  private filePath: string
  private originalFileName: string

  public async Approve(approver: Employee): Promise<void> {
    if (
      this.amount > 10000 ||
      approver.isRoleHigherThan(Role.Manager) ||
      !this.owner.isRoleHigherThan(Role.Manager)
    ) {
      throw new Error(
        'The amount in purchase request is higher than what you can requested'
      )
    }

    // เราต้องการเขียนว่า
    // const filePath = `${uuid.v4()}-${this.originalFileName}`
    // fileService.save(filePath, this.fileContent)

    const filePath = `${uuid.v4()}-${this.originalFileName}`
    const fileService: FileService = getFileService()
    await fileService.save(filePath, this.fileContent)
  }
}

interface FileService {
  save(filePath: string, fileContent: Buffer): Promise<void>
}
function getFileService() {
  // นี่เรียกว่า Factory Pattern
  if (Env === 'local') {
    return new LocalFileService()
  }
  return new ProductionFileService()
}
class LocalFileService {
  async save(filePath: string, fileContent: Buffer) {
    fs.writeFileSync(`/tmp/${filePath}`, fileContent)
  }
}

class ProductionFileService {
  client: Minio.Client
  constructor() {
    this.client = new Minio.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: true,
      accessKey: 'minio', // Bad practice, but not sensitive in this context
      secretKey: 'minio123', // Bad practice, but not sensitive in this context
    })
  }
  async save(filePath: string, fileContent: Buffer) {
    await this.client.putObject('myBucket', filePath, fileContent)
  }
}
