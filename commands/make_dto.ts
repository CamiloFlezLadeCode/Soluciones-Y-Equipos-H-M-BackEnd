import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import fs from 'fs-extra';

export default class MakeDto extends BaseCommand {
  static commandName = 'make:dto'
  static description = ''

  static options: CommandOptions = {}

  @args.string({ description: 'Nombre del repositorio' })
  public name!: string

  async run() {
    const name = this.name
    this.logger.info(`Creando Dto ${name}`)

    const path = `app/dtos/${name}.ts`

    const cleanName = name.includes('/') ? name.split('/').pop()! : name
    await fs.outputFile(
      path,
      `export default class ${cleanName}Dto {\npublic id?: number\n}`
    )
    this.logger.info(`Dto ${cleanName} creado`)
  }
}
