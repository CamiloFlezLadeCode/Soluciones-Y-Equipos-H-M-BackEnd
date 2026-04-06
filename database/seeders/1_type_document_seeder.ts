import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import TblTipoDocumento from '#models/tbl_tipo_documento'

export default class extends BaseSeeder {
  async run() {
    const typeDocument = [
      {
        tipodocuCodigo: 'CC',
        tipodocuDescripcion: 'Cédula Ciudadanía',
        tipodocuUsuarioCrea: 'Desarrollador',
        tipodocuUsuarioModifica: 'Desarrollador',
      },
      {
        tipodocuCodigo: 'NIT',
        tipodocuDescripcion: 'Número de Identificación Tributaria',
        tipodocuUsuarioCrea: 'Desarrollador',
        tipodocuUsuarioModifica: 'Desarrollador',
      },
    ]

    let count = 0;
    let existed = 0;
    let created = 0;

    for (const item of typeDocument) {
      count++;
      const existing = await TblTipoDocumento.findBy('tipodocuCodigo', item.tipodocuCodigo)
      if (existing) {
        existed++;
      } else {
        await TblTipoDocumento.create(item)
        created++;
      }
    }
    logger.info(`1-TypeDocument: ${count} items, ${existed} existed, and ${created} created`)
  }
}