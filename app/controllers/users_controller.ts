import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { createUserValidator } from '#validators/user/create_user'

@inject()
export default class UsersController {
    constructor(
        protected userService: UserService) {
    }

    async create({ request, response }: HttpContext) {
        const body = await request.validateUsing(createUserValidator);
        return response.send(await this.userService.create(body))
    }
}
