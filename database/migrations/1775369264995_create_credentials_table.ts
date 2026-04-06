import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_credenciales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment('Tabla encargada de almacenar todas las credenciales de los usuarios')
      table.increments('creden_id').unique().notNullable().comment('Identificador único de la credencial')
      table.string('creden_documento_usuario', 20).unique().notNullable().comment('Número de documento del usuario')
      table.string('creden_clave').notNullable().comment('Contraseña del usuario')

      // Auditoria
      table.string('creden_usuario_crea', 20).notNullable().comment('Identificador del usuario que creó el registro')
      table.string('creden_usuario_modifica', 20).nullable().comment('Identificador del usuario que modificó el registro')
      table.timestamp('creden_fecha_creacion', { useTz: false, precision: 6 }).notNullable().comment('Fecha de creación del registro')
      table.timestamp('creden_fecha_modificacion', { useTz: false, precision: 6 }).nullable().comment('Fecha de modificación del registro')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}