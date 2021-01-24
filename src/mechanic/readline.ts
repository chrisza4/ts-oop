import * as readline from 'readline'

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
)

export async function readLine(query: string): Promise<string> {
  return new Promise((resolve) => {
    readlineInterface.question(query, (val) => resolve(val))
  })
}

export function close() {
  readlineInterface.close()
}
