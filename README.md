DID Hedera CLI
==============

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g did-hedera-cli
$ did-hedera COMMAND
running command...
$ did-hedera (--version)
did-hedera-cli/0.0.0 darwin-arm64 node-v17.2.0
$ did-hedera --help [COMMAND]
USAGE
  $ did-hedera COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`did-hedera help [COMMAND]`](#did-hedera-help-command)
* [`did-hedera messages DID`](#did-hedera-messages-did)
* [`did-hedera new`](#did-hedera-new)
* [`did-hedera plugins`](#did-hedera-plugins)
* [`did-hedera plugins:inspect PLUGIN...`](#did-hedera-pluginsinspect-plugin)
* [`did-hedera plugins:install PLUGIN...`](#did-hedera-pluginsinstall-plugin)
* [`did-hedera plugins:link PLUGIN`](#did-hedera-pluginslink-plugin)
* [`did-hedera plugins:uninstall PLUGIN...`](#did-hedera-pluginsuninstall-plugin)
* [`did-hedera plugins update`](#did-hedera-plugins-update)
* [`did-hedera resolve DID`](#did-hedera-resolve-did)
* [`did-hedera service add [IDSUFFIX] [TYPE] [SERVICEENDPOINT]`](#did-hedera-service-add-idsuffix-type-serviceendpoint)
* [`did-hedera service revoke [IDSUFFIX]`](#did-hedera-service-revoke-idsuffix)
* [`did-hedera service update [IDSUFFIX] [TYPE] [SERVICEENDPOINT]`](#did-hedera-service-update-idsuffix-type-serviceendpoint)

## `did-hedera help [COMMAND]`

Display help for did-hedera.

```
USAGE
  $ did-hedera help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for did-hedera.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `did-hedera messages DID`

List messages (& events) on HCS for did:hedera

```
USAGE
  $ did-hedera messages [DID] [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  List messages (& events) on HCS for did:hedera

EXAMPLES
  $ did-hedera messages did:hedera:testnet:z6MkrgzSb23YA21FBqTgrq5AssRxMdYrwyF9P1HSNRDCxqKu_0.0.29666198
```

_See code: [dist/commands/messages.ts](https://github.com/javereec/did-hedera-cli/blob/v0.0.0/dist/commands/messages.ts)_

## `did-hedera new`

Create new did:hedera

```
USAGE
  $ did-hedera new [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Create new did:hedera

EXAMPLES
  $ did-hedera new
```

_See code: [dist/commands/new.ts](https://github.com/javereec/did-hedera-cli/blob/v0.0.0/dist/commands/new.ts)_

## `did-hedera plugins`

List installed plugins.

```
USAGE
  $ did-hedera plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ did-hedera plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `did-hedera plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ did-hedera plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ did-hedera plugins:inspect myplugin
```

## `did-hedera plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ did-hedera plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ did-hedera plugins add

EXAMPLES
  $ did-hedera plugins:install myplugin 

  $ did-hedera plugins:install https://github.com/someuser/someplugin

  $ did-hedera plugins:install someuser/someplugin
```

## `did-hedera plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ did-hedera plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ did-hedera plugins:link myplugin
```

## `did-hedera plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ did-hedera plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ did-hedera plugins unlink
  $ did-hedera plugins remove
```

## `did-hedera plugins update`

Update installed plugins.

```
USAGE
  $ did-hedera plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `did-hedera resolve DID`

Resolve did:hedera

```
USAGE
  $ did-hedera resolve [DID] [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Resolve did:hedera

EXAMPLES
  $ did-hedera resolve did:hedera:testnet:z6MkrgzSb23YA21FBqTgrq5AssRxMdYrwyF9P1HSNRDCxqKu_0.0.29666198
```

_See code: [dist/commands/resolve.ts](https://github.com/javereec/did-hedera-cli/blob/v0.0.0/dist/commands/resolve.ts)_

## `did-hedera service add [IDSUFFIX] [TYPE] [SERVICEENDPOINT]`

Add a service definition for did:hedera

```
USAGE
  $ did-hedera service add [IDSUFFIX] [TYPE] [SERVICEENDPOINT] -d <value> -p <value>

FLAGS
  -d, --did=<value>         (required) did:hedera
  -p, --privateKey=<value>  (required) hex-encoded private key that controls the DID

DESCRIPTION
  Add a service definition for did:hedera

EXAMPLES
  $ did-hedera service:add service-1 LinkedDomains https://example.com/s1
```

## `did-hedera service revoke [IDSUFFIX]`

Revoke a service for the DID

```
USAGE
  $ did-hedera service revoke [IDSUFFIX] -d <value> -p <value>

FLAGS
  -d, --did=<value>         (required) did:hedera
  -p, --privateKey=<value>  (required) hex-encoded private key that controls the DID

DESCRIPTION
  Revoke a service for the DID

EXAMPLES
  $ did-hedera service revoke service-1
```

## `did-hedera service update [IDSUFFIX] [TYPE] [SERVICEENDPOINT]`

Update a service for the DID

```
USAGE
  $ did-hedera service update [IDSUFFIX] [TYPE] [SERVICEENDPOINT] -d <value> -p <value>

FLAGS
  -d, --did=<value>         (required) did:hedera
  -p, --privateKey=<value>  (required) hex-encoded private key that controls the DID

DESCRIPTION
  Update a service for the DID

EXAMPLES
  $ did-hedera service:add service-1 LinkedDomains https://example.com/vcs
```
<!-- commandsstop -->
