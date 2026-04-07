import LoginDTO from '#dtos/Auth/LoginDTO';
import TblCredenciale from "#models/tbl_credenciale";

export default class LoginRepository {
    async login(loginDto: LoginDTO) {
        return await TblCredenciale.query()
            .select('credenClave', 'credenId', 'credenDocumentoUsuario')
            .where('credenDocumentoUsuario', loginDto.credenDocumentoUsuario).preload('usuario').first()

    }
}