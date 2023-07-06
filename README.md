
#  Nx-PM2 Plugin

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
	"options": {
		"command": "nx-pm2-example:serve:production",
		"name": "example"
	}
}
```

execute  task

```bash
npx nx run  nx-pm2-example:pm2

```

##  Documentation

### Executor options

([Shema](https://github.com/jonathandsouza/nx-pm2/blob/main/packages/nx-pm2-plugin/src/executors/pm2-executor/schema.d.ts)): 

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the application |
| instances | number | Number of instances to start, if set, automatically in cluster mode |
| max_memory_restart | string | Max memory amount after which app needs to restart |
| log_date_format | string | Date format for logs |
| merge_logs | boolean | Whether to merge logs |
| autorestart | boolean | Whether to auto-restart the application when it crashes or ends |
| log_file | string | Path to the file where both out and error logs will be written |
| out_file | string | Path to the file where application stdout will be written |
| error_file | string | Path to the file where application stderr will be written |
| pid_file | string | Path to the file where application pid will be written |
| command | string |  Nx project command to be executed by PM2 |


### Picking up pm2 configuration from env:

In the following example the **INSTANCE_NAME** & **NO_OF_INSTANCES** will be picked up from **process.env**

```json
"pm2": {
	"executor": "nx-pm2-plugin:pm2-executor",
	"dependsOn": ["build"],
	"options": {
		"command": "nx-pm2-example:serve:production",
		"instances": "${NO_OF_INSTANCES}",
		"name": "${INSTANCE_NAME}"
	}
}

```
### Mandatory options:

The following executor options are mandatory:

| Property | Type | Description |
| --- | --- | --- |
| command | string |  Nx project command to be executed by PM2 |
| name | string | The name of the PM2 instance |


##  Test

To run tests, use the following command:

```bash

npm test

```
  

##  License

[MIT](https://choosealicense.com/licenses/mit/)

##  Contact

If you have any questions or need further clarification, feel free to reach out.

  

-  Github: [Jonathan Dsouza](https://github.com/jonathandsouza)

-  Email: mail2jona@yahoo.com

  

##  Changelog
See the [CHANGELOG.md](CHANGELOG.md) file for details.
