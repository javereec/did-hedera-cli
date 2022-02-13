import {CliUx, Command, Flags} from '@oclif/core'

import {PrivateKey, Client} from '@hashgraph/sdk'
import {HcsDid} from '@hashgraph/did-sdk-js'
import chalk from 'chalk'

import config from '../../config'

export default class ServiceRevoke extends Command {
  static description = 'Revoke a service for the DID'

  static examples = [
    '$ did-hedera service revoke service-1',
  ]

  static flags = {
    did: Flags.string({char: 'd', description: 'did:hedera', required: true}),
    privateKey: Flags.string({char: 'p', description: 'hex-encoded private key that controls the DID', required: true}),
  }

  static args = [
    {name: 'idSuffix', require: true},
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ServiceRevoke)

    const client = Client.forName(config.HEDERA_NETWORK).setOperator(config.OPERATOR_ID, config.OPERATOR_KEY)
    const d = new HcsDid({identifier: flags.did, privateKey: PrivateKey.fromString(flags.privateKey), client: client})

    const serviceId = `${d.getIdentifier()}#${args.idSuffix}`

    this.log(`${chalk.green.bold(d.getIdentifier())}`)
    CliUx.ux.action.start(`Revoking service ${chalk.italic(serviceId)}`)
    await d.revokeService({id: serviceId})
    CliUx.ux.action.stop()
  }
}
