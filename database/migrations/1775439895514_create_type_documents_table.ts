import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_tipo_documento'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment('Tabla de tipos de documentos')
      table.increments('tipodocu_id').notNullable().comment('Identificador del tipo de documento')
      table.string('tipodocu_descripcion', 100).notNullable().unique().comment('Descripción del tipo de documento')
      table.string('tipodocu_codigo', 5).notNullable().unique().comment('Codigo ó abreviatura del tipo de documento')

      // Auditoria
      table.string('tipodocu_usuario_crea', 20).notNullable().comment('Identificador del usuario que creó el registro')
      table.string('tipodocu_usuario_modifica', 20).nullable().comment('Identificador del usuario que modificó el registro')
      table.timestamp('tipodocu_fecha_creacion', { useTz: false, precision: 6 }).notNullable().comment('Fecha de creación del registro')
      table.timestamp('tipodocu_fecha_modificacion', { useTz: false, precision: 6 }).nullable().comment('Fecha de modificación del registro')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}