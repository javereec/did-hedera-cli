import {CliUx, Command, Flags} from '@oclif/core'
import {Client} from '@hashgraph/sdk'
import {HcsDid, HcsDidEventMessageResolver} from '@hashgraph/did-sdk-js'
import chalk from 'chalk'
import config from '../config'
export default class Messages extends Command {
  static description = 'List messages (& events) on HCS for did:hedera'

  static examples = [
    '$ did-hedera messages did:hedera:testnet:z6MkrgzSb23YA21FBqTgrq5AssRxMdYrwyF9P1HSNRDCxqKu_0.0.29666198',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
  }

  static args = [{name: 'did', required: true}]

  public async run(): Promise<void> {
    const {args} = await this.parse(Messages)

    const client = Client.forName(config.HEDERA_NETWORK).setOperator(config.OPERATOR_ID, config.OPERATOR_KEY)

    CliUx.ux.action.start(`Resolving ${chalk.green.bold(args.did)}`)
    const d = new HcsDid({identifier: args.did, client: client})

    new HcsDidEventMessageResolver(d.getTopicId())
    .setTimeout(3000)
    .whenFinished(msgs => {
      const numberOfMessages = msgs.length

      for (const [i, msg] of msgs.entries()) {
        this.log('\n')
        this.log(`= ${chalk.bold('Message')} ${chalk.green(i + 1)} ${chalk.bold('of')} ${chalk.green(numberOfMessages)} ============================================================`)
        this.log('')
        this.log(chalk.italic('Message content'))
        this.log(msg.toJsonTree())
        this.log('')
        this.log(chalk.italic('Event content'))
        this.log(msg.getEvent().toJsonTree())
      }

      this.log(`Listed all ${chalk.bold(msgs.length)} messages 👆`)
    }).execute(client)
    CliUx.ux.action.stop()

    const dragonglassUrl = `https://testnet.dragonglass.me/hedera/topics/${d.getTopicId().toString()}`
    await CliUx.ux.url(`🐉 ${dragonglassUrl}`, dragonglassUrl)
  }
}
