import fs from 'fs'
import * as uuid from 'uuid'
import * as Minio from 'minio'
import { Role, Employee } from './shared'

const Env = process.env['NODE_ENV']

export class PurchaseRequest {
  private description: string
  private owner: Employee
  private amount: number
  private fileContent: Buffer
  private filePath: string
  private originalFileName: string

  public async Approve(approver: Employee): Promise<void> {
    if (
      this.amount > 10000 ||
      !approver.isRoleHigherThan(Role.Manager) ||
      !this.owner.isRoleHigherThan(Role.Manager)
    ) {
      throw new Error(
        'The amount in purchase request is higher than what you can requested'
      )
    }

    const filePath = `${uuid.v4()}-${this.originalFileName}`
    const fileService = getUploadService()
    fileService.save(filePath, this.fileContent)
  }
}

interface FileService {
  save(filePath: string, fileContent: Buffer): Promise<void>
}

// Infra
function getUploadService() {
  if (Env === 'local') {
    return new LocalUploadService()
  }
  if (Env === 'production') {
    return new ProductionUploadService()
  }
}

class LocalUploadService implements FileService {
  async save(filePath: string, fileContent: Buffer) {
    fs.writeFileSync(`/tmp/${filePath}`, fileContent)
  }
}

class ProductionUploadService implements FileService {
  async save(filePath: string, fileContent: Buffer) {
    const client = new Minio.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: true,
      accessKey: 'minio', // Bad practice, but not sensitive in this context
      secretKey: 'minio123', // Bad practice, but not sensitive in this context
    })
    await client.putObject('myBucket', filePath, fileContent)
  }
}
