import { TblCredencialeSchema } from '#database/schema'
import { column, belongsTo } from '@adonisjs/lucid/orm'
import TblUsuario from '#models/tbl_usuario'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
// import { DateTime } from 'luxon'

export default class TblCredenciale extends TblCredencialeSchema {

    @column({ columnName: 'creden_clave', serializeAs: null })
    declare credenClave: string

    // @column.dateTime({ columnName: 'creden_fecha_creacion' })
    // declare credenFechaCreacion: DateTime
    // @column.dateTime({ columnName: 'creden_fecha_modificacion' })
    // declare credenFechaModificacion: DateTime | null

    @belongsTo(() => TblUsuario, {
        localKey: 'usuDocumento',
        foreignKey: 'credenDocumentoUsuario',
    })
    declare usuario: BelongsTo<typeof TblUsuario>
}
