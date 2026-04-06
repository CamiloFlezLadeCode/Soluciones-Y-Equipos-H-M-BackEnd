import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment('Tabla de roles')
      table.increments('rol_id').comment('ID del rol')
      table.string('rol_descripcion', 50).notNullable().unique().comment('Descripción del rol')

      // Auditoria
      table.string('rol_usuario_crea', 20).notNullable().comment('Identificador del usuario que creó el registro')
      table.string('rol_usuario_modifica', 20).nullable().comment('Identificador del usuario que modificó el registro')
      table.timestamp('rol_fecha_creacion', { useTz: false, precision: 6 }).notNullable().comment('Fecha de creación del registro')
      table.timestamp('rol_fecha_modificacion', { useTz: false, precision: 6 }).nullable().comment('Fecha de modificación del registro')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}