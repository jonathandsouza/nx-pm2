/* eslint-disable @typescript-eslint/no-explicit-any */

import { Pm2ExecutorSchema as Pm2ExecutorSchema } from './schema';
import executor from './executor';
import { exec } from 'child_process';

// mock child_process.exec
jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

describe('Pm2Executor Executor', () => {
  it('The command should be constructed correctly', async () => {

    const options: Pm2ExecutorSchema = {
      command: 'start',
      instances: 1,
      name: 'api',
      max_memory_restart: '1G',
      error_file: 'error.log',
      out_file: 'out.log',
      log_file: 'log.log',
      pid_file: 'pid.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    };
    

    const mockExec = exec as jest.MockedFunction<typeof exec>;

    mockExec.mockImplementation((command, callback) => {
      callback && (callback as any)(null, 'stdout', 'stderr');
      return {} as any;
    });

    const output = await executor(options);
    expect(output.success).toBe(true);

    const expectOption = option =>  expect(mockExec).toHaveBeenCalledWith(expect.stringContaining(option), expect.anything());

    expectOption('--instances 1');
    expectOption('--name api');
    expectOption('--error error.log');
    expectOption('--output out.log');
    expectOption('--pid pid.log');
    expectOption('--log log.log');
    expectOption('--log-date-format YYYY-MM-DD HH:mm:ss');
    expectOption('--max-memory-restart 1G');
    expectOption('-- run start');

  });
});
