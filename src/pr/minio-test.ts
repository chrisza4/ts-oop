import chalk from 'chalk'
import * as Minio from 'minio'
import * as uuid from 'uuid'

function assert(cond: boolean, msg: string) {
  if (!cond) {
    console.log(chalk.red('Assertion failed'))
    throw Error(msg)
  }
}

async function testMinio() {
  const client = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minio', // Bad practice, but not sensitive in this context
    secretKey: 'minio123', // Bad practice, but not sensitive in this context
  })
  const bucketName = 'mybucket'
  const fileUploadName = `${uuid.v4()}-hello.txt`
  if (!(await client.bucketExists(bucketName))) {
    await client.makeBucket(bucketName, 'us-east-1')
  }
  const contentToSave = `Hello world - ${uuid.v4()}`
  await client.putObject(bucketName, fileUploadName, contentToSave)
  const download = await client.getObject(bucketName, fileUploadName)
  const contentFromFile: Buffer = download.read()
  assert(contentFromFile.toString('utf8') == contentToSave, 'Content mismatch')

  console.log(chalk.green('Minio tested!'))
}

testMinio().catch((err) => console.log(err))
