import {Command} from '@oclif/core'

export abstract class Init extends Command {
  async init(): Promise<void> {
    await super.init()
  }
}
