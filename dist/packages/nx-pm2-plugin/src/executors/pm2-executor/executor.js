"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const util_1 = require("util");
function runExecutor(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const reduce = param => {
            if (typeof param !== 'string') {
                return param;
            }
            return param.replace(/\$\{([A-Za-z0-9_]+)\}/g, (substring, ...args) => {
                var _a;
                return (_a = process.env[args[0]]) !== null && _a !== void 0 ? _a : "";
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
        const { stderr } = yield (0, util_1.promisify)(child_process_1.exec)(command);
        if (stderr) {
            throw new Error(stderr);
        }
        return {
            success: true
        };
    });
}
exports.default = runExecutor;
//# sourceMappingURL=executor.js.map