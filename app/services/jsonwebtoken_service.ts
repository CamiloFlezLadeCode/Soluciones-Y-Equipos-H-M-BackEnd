import env from '#start/env'
import jwt from 'jsonwebtoken'

export class JsonwebtokenService {
  async generateToken(payload: any) {
    return jwt.sign(payload, env.get('API_KEY_SECRET'), { expiresIn: '1d' })
  }

  async verifyToken(token: string) {
    return jwt.verify(token, env.get('API_KEY_SECRET'))
  }

  async decodeToken(token: string) {
    return jwt.decode(token)
  }
}