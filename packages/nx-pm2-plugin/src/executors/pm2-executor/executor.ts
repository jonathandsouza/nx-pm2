import { Pm2ExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function runExecutor(
	options: Pm2ExecutorSchema,
) {
	const reduce = param => {
		if (typeof param !== 'string') {
			return param;
		}

		return param.replace(/\$\{([A-Za-z0-9_]+)\}/g, (substring, ...args) => {
			return process.env[args[0]] ?? "";
		});
	};

	const gc = (param, key = '') => (param ? `${key ? '--' + key : ''} ${reduce(param)}` : '');

	const command = `npx pm2 start` +
		`${gc('node_modules/nx/bin/nx.js')} ` +
		`${gc(options.instances, 'instances')} ` +
		`${gc(options.name, 'name')} ` +
		`${gc(options.error_file, 'error')} ` +
		`${gc(options.out_file, 'output')} ` +
		`${gc(options.pid_file, 'pid')} ` +
		`${gc(options.log_file, 'log')} ` +
		`${gc(options.log_date_format, 'log-date-format')} ` +
		`${gc(options.max_memory_restart, 'max-memory-restart')} ` +
		`${options.merge_logs ? gc('', 'merge-logs') + ' ' : ''}` +
		
		// Note: the space before run is necessary otherwise the command will fail.
		`${gc(options.command, ' run')}`;

	console.log('Pm2 Executor ran for:', command);

	const { stderr } = await promisify(exec)(
		command
	);

	if (stderr) {
		throw new Error(stderr)
	}

	return {
		success: true
	};
}
