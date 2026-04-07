import { RESPONSE_CODE, RESPONSE_MESSAGE_LOGIN, RESPONSE_STATUS } from '#constants/http.constants'
import LoginDTO from '#dtos/Auth/LoginDTO'
import ResponseStructureDTO from '#dtos/responseStructureDTO'
import LoginRepository from '#repositories/Login'
import { HashService } from '#services/hash_service'
import { JsonwebtokenService } from '#services/jsonwebtoken_service'
import { inject } from '@adonisjs/core'

@inject()
export class AuthService {
  constructor(
    private loginRepository: LoginRepository,
    private hashService: HashService,
    private jsonwebtokenService: JsonwebtokenService
  ) { }

  async login(loginDto: LoginDTO) {
    const userCredentiales = await this.loginRepository.login(loginDto)

    if (!userCredentiales) {
      // throw new Error('Unregistered user')
      return new ResponseStructureDTO(
        RESPONSE_STATUS.ERROR,
        RESPONSE_CODE.NOT_FOUND,
        RESPONSE_MESSAGE_LOGIN.UNREGISTERED_USER,
        null
      )
    }

    const isValid = await this.hashService.verify(userCredentiales.credenClave, loginDto.credenClave)
    if (!isValid) {
      // throw new Error('Incorrect credentials')
      return new ResponseStructureDTO(
        RESPONSE_STATUS.ERROR,
        RESPONSE_CODE.UNAUTHORIZED,
        RESPONSE_MESSAGE_LOGIN.INCORRECT_CREDENTIALS,
        null
      )
    }

    const token = await this.jsonwebtokenService.generateToken({
      usuario: userCredentiales.usuario
    })
    // return {
    //   // id: userCredentiales.credenId,
    //   // documentoUsuario: userCredentiales.credenDocumentoUsuario,
    //   // clave: userCredentiales.credenClave,
    //   // usuario: userCredentiales.usuario,
    //   token
    // }
    return new ResponseStructureDTO(
      RESPONSE_STATUS.SUCCESS,
      RESPONSE_CODE.OK,
      RESPONSE_MESSAGE_LOGIN.SUCCESSFUL_LOGIN,
      token
    )

  }
}