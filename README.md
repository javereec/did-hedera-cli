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
* [`did-hedera hello PERSON`](#didhedera-hello-person)
* [`did-hedera hello world`](#didhedera-hello-world)
* [`did-hedera help [COMMAND]`](#didhedera-help-command)
* [`did-hedera plugins`](#didhedera-plugins)
* [`did-hedera plugins:inspect PLUGIN...`](#didhedera-pluginsinspect-plugin)
* [`did-hedera plugins:install PLUGIN...`](#didhedera-pluginsinstall-plugin)
* [`did-hedera plugins:link PLUGIN`](#didhedera-pluginslink-plugin)
* [`did-hedera plugins:uninstall PLUGIN...`](#didhedera-pluginsuninstall-plugin)
* [`did-hedera plugins update`](#didhedera-plugins-update)

## `did-hedera hello PERSON`

Say hello

```
USAGE
  $ did-hedera hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/javereec/did-hedera-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `did-hedera hello world`

Say hello world

```
USAGE
  $ did-hedera hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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
<!-- commandsstop -->
