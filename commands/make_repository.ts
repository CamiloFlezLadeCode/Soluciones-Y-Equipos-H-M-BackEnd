import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import fs from 'fs-extra';

export default class MakeRepository extends BaseCommand {
  static commandName = 'make:repository'
  static description = ''

  static options: CommandOptions = {}

  @args.string({ description: 'Nombre del repositorio' })
  public name!: string

  async run() {
    const name = this.name
    this.logger.info(`Creando repositorio ${name}`)
    const path = `app/repositories/${name}.ts`

    await fs.outputFile(
      path,
      `export default class ${name}Repository {\n\n}`
    )

    this.logger.success(`Repositorio ${name} creado con éxito`)
  }
}