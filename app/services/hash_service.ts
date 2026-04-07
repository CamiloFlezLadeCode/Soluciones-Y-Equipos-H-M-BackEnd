import hash from '@adonisjs/core/services/hash'

export class HashService {
  async make(plainText: string): Promise<string> {
    return hash.make(plainText)
  }

  async verify(hashedValue: string, plainText: string): Promise<boolean> {
    return hash.verify(hashedValue, plainText)
  }

  needsReHash(hashedValue: string): boolean {
    return hash.needsReHash(hashedValue)
  }
}