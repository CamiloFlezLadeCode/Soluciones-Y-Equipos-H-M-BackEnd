import UserRepository from "../repositories/User.ts"
import { inject } from '@adonisjs/core'
import CreateUserDto from "../dtos/User/CreateUser.ts"

@inject()
export class UserService {
  constructor(
    protected userRepository: UserRepository
  ) { }
  async create(createUserDto: CreateUserDto) {
    await this.userRepository.create(createUserDto)
  }
}