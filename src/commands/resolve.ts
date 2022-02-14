import {CliUx, Command, Flags} from '@oclif/core'
import {Client} from '@hashgraph/sdk'
import {HcsDid} from '@hashgraph/did-sdk-js'
import chalk from 'chalk'
import config from '../config'

export default class Resolve extends Command {
  static description = 'Resolve did:hedera'

  static examples = [
    '$ did-hedera resolve did:hedera:testnet:z6MkrgzSb23YA21FBqTgrq5AssRxMdYrwyF9P1HSNRDCxqKu_0.0.29666198',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
  }

  static args = [{name: 'did', required: true}]

  public async run(): Promise<void> {
    const {args} = await this.parse(Resolve)

    const client = Client.forName(config.HEDERA_NETWORK).setOperator(config.OPERATOR_ID, config.OPERATOR_KEY)

    CliUx.ux.action.start(`Resolving ${chalk.green.bold(args.did)}`)
    const d = new HcsDid({identifier: args.did, client: client})
    const didDoc = await d.resolve()
    CliUx.ux.action.stop()

    this.log(didDoc.toJsonTree())
  }
}
