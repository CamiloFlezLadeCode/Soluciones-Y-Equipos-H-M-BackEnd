import UserRepository from "#repositories/User"
import { inject } from '@adonisjs/core'
import CreateUserDTO from "#dtos/User/CreateUserDTO"

@inject()
export class UserService {
  constructor(
    protected userRepository: UserRepository
  ) { }
  async create(createUserDto: CreateUserDTO) {
    await this.userRepository.create(createUserDto)
  }
}