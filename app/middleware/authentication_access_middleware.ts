import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import jwt from 'jsonwebtoken'
import env from '#start/env'
import { RESPONSE_CODE, RESPONSE_MESSAGE, RESPONSE_STATUS } from '../constants/http.constants.ts'
import ResponseStructureDTO from '../dtos/responseStructureDTO.js'
import logger from '@adonisjs/core/services/logger'

export default class AuthenticationAccessMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const apiKey = env.get('API_KEY')
    const apiKeySecret = env.get('API_KEY_SECRET')
    const apiKeyAccess = env.get('API_KEY_ACCESS')

    const headers = ctx.request.headers()
    const apiKeyHeader = headers['api-key']
    const apiKeyAccessHeader = headers['api-key-access']
    const apiKeyAccesstoken = headers['api-key-access-token']

    if (!apiKeyHeader || !apiKeyAccessHeader || !apiKeyAccesstoken) {
      logger.error("API Key, API Key Access, or API Key Access Token is missing")
      ctx.response.status(401).send(new ResponseStructureDTO(RESPONSE_STATUS.ERROR, RESPONSE_CODE.UNAUTHORIZED, RESPONSE_MESSAGE.UNAUTHORIZED, null))
      return
    }

    if (apiKeyHeader !== apiKey) {
      logger.error("API Key is invalid")
      ctx.response.status(401).send(new ResponseStructureDTO(RESPONSE_STATUS.ERROR, RESPONSE_CODE.UNAUTHORIZED, RESPONSE_MESSAGE.UNAUTHORIZED, null))
      return
    }

    if (apiKeyAccessHeader !== apiKeyAccess) {
      logger.error("API Key Access is invalid")
      ctx.response.status(401).send(new ResponseStructureDTO(RESPONSE_STATUS.ERROR, RESPONSE_CODE.UNAUTHORIZED, RESPONSE_MESSAGE.UNAUTHORIZED, null))
      return
    }

    // const encriptKey = jwt.sign({ apiKey: apiKey, apiKeyAccess: apiKeyAccess }, apiKeySecret, { header: { alg: 'HS256', typ: 'JWT' } })
    // const isValid = jwt.verify(String(apiKeyAccesstoken), apiKeySecret)

    // if (!jwt.verify(String(apiKeyAccesstoken), apiKeySecret)) {
    //   logger.error("API Key Access Token is invalid")
    //   ctx.response.status(401).send(new ResponseStructureDTO(RESPONSE_STATUS.ERROR, RESPONSE_CODE.UNAUTHORIZED, RESPONSE_MESSAGE.UNAUTHORIZED, null))
    //   return
    // }

    try {
      jwt.verify(String(apiKeyAccesstoken), apiKeySecret)
    } catch (error: any) {
      logger.error("API Key Access Token is invalid:", error.message)
      ctx.response.status(401).send(new ResponseStructureDTO(
        RESPONSE_STATUS.ERROR,
        RESPONSE_CODE.UNAUTHORIZED,
        RESPONSE_MESSAGE.UNAUTHORIZED,
        null
      ))
      return
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}