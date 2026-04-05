import { TblUsuarioSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class TblUsuario extends TblUsuarioSchema {
    public static table = 'TBL_USUARIO'
    /**
     * NOTA:
     * Este modelo ya contiene las columnas reales de la tabla y están precisamente en import { TblUsuarioSchema } from '#database/schema'
     * El modelo no contiene ninguna columna adicional.
     * El modelo en esta versión 7 de Adonisjs únicamente sirve para mapear realaciones con otras tablas y disparadores 
     * ¡¡¡MUY IMPORTANTE!!! Los nombres de las columnas en la migración, se deben nombrar en minúsculas y con guión bajo, ejmplo: usu_nombres
     */

    @column.dateTime({ autoCreate: true, columnName: 'usu_fecha_creacion' })
    declare usuFechaCreacion: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'usu_fecha_modificacion' })
    declare usuFechaModificacion: DateTime
}
