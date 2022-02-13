import {CliUx, Command, Flags} from '@oclif/core'

import {PrivateKey, Client} from '@hashgraph/sdk'
import {HcsDid} from '@hashgraph/did-sdk-js'
import chalk from 'chalk'

import config from '../../config'

export default class ServiceUpdate extends Command {
  static description = 'Update a service for the DID'

  static examples = [
    '$ did-hedera service:add service-1 LinkedDomains https://example.com/vcs',
  ]

  static flags = {
    did: Flags.string({char: 'd', description: 'did:hedera', required: true}),
    privateKey: Flags.string({char: 'p', description: 'hex-encoded private key that controls the DID', required: true}),
  }

  static args = [
    {name: 'idSuffix', require: true},
    {name: 'type', require: true},
    {name: 'serviceEndpoint', require: true},
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ServiceUpdate)

    const client = Client.forName(config.HEDERA_NETWORK).setOperator(config.OPERATOR_ID, config.OPERATOR_KEY)
    const d = new HcsDid({identifier: flags.did, privateKey: PrivateKey.fromString(flags.privateKey), client: client})

    const serviceId = `${d.getIdentifier()}#${args.idSuffix}`

    this.log(`${chalk.green.bold(d.getIdentifier())}`)
    CliUx.ux.action.start(`Updating service ${chalk.italic(serviceId)}`)
    await d.updateService({
      id: serviceId,
      type: args.type,
      serviceEndpoint: args.serviceEndpoint,
    })
    CliUx.ux.action.stop()
  }
}
