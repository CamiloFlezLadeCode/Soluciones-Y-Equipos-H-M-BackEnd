import { AuthService } from '#services/auth_service'
import { loginValidator } from '#validators/auth/login'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    async login({ request, response }: HttpContext) {
        const params = await request.validateUsing(loginValidator)
        const res = await this.authService.login(params)
        return response.status(res.code).send(res)
    }
}