import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { createUserValidator } from '#validators/user/create_user'
import ResponseStructureDTO from '../dtos/responseStructureDTO.js'
import { RESPONSE_CODE, RESPONSE_MESSAGE, RESPONSE_STATUS } from '../constants/http.constants.js'

@inject()
export default class UsersController {
    constructor(
        protected userService: UserService) {
    }

    async create({ request, response }: HttpContext) {
        try {
            const body = await request.validateUsing(createUserValidator);
            const user = await this.userService.create(body);
            return response.send(new ResponseStructureDTO(
                RESPONSE_STATUS.SUCCESS,
                RESPONSE_CODE.CREATED,
                RESPONSE_MESSAGE.CREATED,
                user
            ))
        } catch (error: any) {
            // return response.badRequest(error)
            return response.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(new ResponseStructureDTO(
                RESPONSE_STATUS.ERROR,
                RESPONSE_CODE.INTERNAL_SERVER_ERROR,
                error.detail,
                null
            ))
        }
    }
}
