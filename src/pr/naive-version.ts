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
    if (Env === 'local') {
      const filePath = `${uuid.v4()}-${this.originalFileName}`
      fs.writeFileSync(`/tmp/${filePath}`, this.fileContent)
      this.filePath = filePath
    }
    if (Env === 'prod') {
      const client = new Minio.Client({
        endPoint: 'localhost',
        port: 9000,
        useSSL: true,
        accessKey: 'minio', // Bad practice, but not sensitive in this context
        secretKey: 'minio123', // Bad practice, but not sensitive in this context
      })
      const filePath = `${uuid.v4()}-${this.originalFileName}`
      await client.putObject('myBucket', filePath, this.fileContent)
      this.filePath = filePath
    }
  }
}
