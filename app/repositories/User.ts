import TblUsuario from "#models/tbl_usuario"
import CreateUserDto from "../dtos/User/CreateUser.ts"

export default class UserRepository {
    public async create(createUserDto: CreateUserDto) {
        console.log("LLEGUEEEE AL REPOSI")
        await TblUsuario.create(createUserDto)
        console.log("Llegó hasta el repository")
    }
}