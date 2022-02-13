import {CliUx, Command, Flags} from '@oclif/core'
import {PrivateKey, Client} from '@hashgraph/sdk'
import {HcsDid} from '@hashgraph/did-sdk-js'
import chalk from 'chalk'
import config from '../config'

// import * as dotenv from 'dotenv'

// dotenv.config()

// const OPERATOR_ID = '0.0.28382998'
// const OPERATOR_KEY = '302e020100300506032b657004220420a58d0bd28dbcf42ab1968934febdc26fbf5efb7ddcd25eeeacbcf8c2701454b3'

export default class New extends Command {
  static description = 'Create new did:hedera'

  static examples = [
    '$ did-hedera new',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
  }

  static args = []

  public async run(): Promise<void> {
    const client = Client.forName(config.HEDERA_NETWORK).setOperator(config.OPERATOR_ID, config.OPERATOR_KEY)

    CliUx.ux.action.start('Creating & registering DID')
    const didPrivateKey = PrivateKey.generate()
    const did = new HcsDid({privateKey: didPrivateKey, client: client})
    const registeredDid = await did.register()
    CliUx.ux.action.stop()

    this.log(`⚠️ ${chalk.yellow('Save the below as it is the last time we\'ll show this')} ⚠️`)
    this.log(`${chalk.green.bold('Private Key')} : ${didPrivateKey.toString()}`)
    this.log(`${chalk.green.bold('Public Key')}  : ${didPrivateKey.publicKey.toString()}`)
    this.log(`${chalk.green.bold('DID')}         : ${registeredDid.getIdentifier()}`)
  }
}
