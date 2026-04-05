import { DateTime } from "luxon"

export default class CreateUserDto {
    usuApellidos: string = "";
    usuCorreo: string = "";
    usuDocumento: string = "";
    usuFechaCreacion: DateTime = DateTime.now();
    usuFechaModificacion: DateTime = DateTime.now();
    usuNombres: string = "";
    usuTipoDocumentoId: number = 0;
    usuUsuarioCrea: string = "";
    usuUsuarioModifica: string = "";
}