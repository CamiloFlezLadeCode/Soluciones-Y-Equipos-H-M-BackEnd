import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'TBL_USUARIO'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment('Tabla encargada de almacenar todos los usuarios')
      table.increments('usu_id').unique().notNullable().comment('Identificador único del usuario')
      table.string('usu_documento', 20).notNullable().unique().comment('Número de documento del usuario')
      table.integer('usu_tipo_documento_id').notNullable().comment('Identificador del tipo de documento del usuario')
      table.string('usu_nombres', 100).notNullable().comment('Nombres del usuario')
      table.string('usu_apellidos', 100).notNullable().comment('Apellidos del usuario')
      table.string('usu_correo').nullable().comment('Correo electrónico del usuario')

      // Auditoria
      table.string('usu_usuario_crea').notNullable().comment('Identificador del usuario que creó el registro')
      table.string('usu_usuario_modifica').nullable().comment('Identificador del usuario que modificó el registro')
      table.timestamp('usu_fecha_creacion', { useTz: false, precision: 6 }).notNullable().comment('Fecha de creación del registro')
      table.timestamp('usu_fecha_modificacion', { useTz: false, precision: 6 }).nullable().comment('Fecha de modificación del registro')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
