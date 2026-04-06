import { TblTipoDocumentoSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class TblTipoDocumento extends TblTipoDocumentoSchema {
    /**
     * NOTA:
     * Este modelo ya contiene las columnas reales de la tabla y están precisamente en import { TblUsuarioSchema } from '#database/schema'
     * El modelo no contiene ninguna columna adicional.
     * El modelo en esta versión 7 de Adonisjs únicamente sirve para mapear realaciones con otras tablas y disparadores 
     * ¡¡¡MUY IMPORTANTE!!! Los nombres de las columnas en la migración, se deben nombrar en minúsculas y con guión bajo, ejmplo: usu_nombres
     */

    @column.dateTime({ autoCreate: true, columnName: 'tipodocu_fecha_creacion' })
    declare tipoDocumentoFechaCreacion: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'tipodocu_fecha_modificacion' })
    declare tipoDocumentoFechaModificacion: DateTime
}