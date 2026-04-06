import TblUsuario from "#models/tbl_usuario"
import CreateUserDTO from "../dtos/User/CreateUserDTO.js"

export default class UserRepository {
    public async create(createUserDto: CreateUserDTO) {
        await TblUsuario.create(createUserDto)
    }
}