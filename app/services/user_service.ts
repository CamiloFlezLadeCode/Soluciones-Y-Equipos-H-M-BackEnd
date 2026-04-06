import UserRepository from "../repositories/User.js"
import { inject } from '@adonisjs/core'
import CreateUserDTO from "../dtos/User/CreateUserDTO.js"

@inject()
export class UserService {
  constructor(
    protected userRepository: UserRepository
  ) { }
  async create(createUserDto: CreateUserDTO) {
    await this.userRepository.create(createUserDto)
  }
}