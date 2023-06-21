
# work in progress.. :)

#  Nx-PM2 Plugin

  

[![npm version](https://badge.fury.io/js/nx-pm2-plugin.svg)](https://badge.fury.io/js/nx-pm2-plugin)

  

The `nx-pm2-plugin` serves as a high-functionality add-on for an [Nx](https://nx.dev/) monorepo, designed to facilitate the execution of any Node.js applications utilizing the [pm2](https://pm2.io/) process manager. This plugin offers seamless integration, optimizing the management and maintenance of your application's runtime processes.
  


##  Installation

Use the package manager [npm](https://www.npmjs.com) to install `nx-pm2-plugin`.

  

```bash

npm  install  nx-pm2-plugin

```

##  Usage

create a task in nx ([example](https://github.com/jonathandsouza/nx-pm2/blob/main/packages/nx-pm2-example/project.json)):

```json
"pm2": {
      "executor": "nx-pm2-plugin:pm2-executor",
      "dependsOn": ["build"],
      "options": {
				"file": "node_modules/nx/bin/nx.js",
				"command": "nx-pm2-example:serve:production",
				"logPath": "./_logs_/pm2/out.log",
				"logErrorPath": "./_logs_/pm2/error.log",
				"instances": 3,
				"mergeLogs": false,
				"name": "example"
			}
    }
```

  


  

execute  task

  

```bash
npx nx run  <project>:pm2

```

  



##  Documentation

  


  

##  Test

  

To run tests, use the following command:

  

```bash

npm  test

```
  

##  Documentation

  

  

##  License

[MIT](https://choosealicense.com/licenses/mit/)

  

##  Contact

  

If you have any questions or need further clarification, feel free to reach out.

  

-  Github: [Jonathan Dsouza](https://github.com/jonathandsouza)

-  Email: mail2jona@yahoo.com

  

##  Changelog

  
See the [CHANGELOG.md](CHANGELOG.md) file for details.#  MyNPMModule
