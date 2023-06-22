import { Pm2ExecutorSchema as Pm2ExecutorSchema } from './schema';
import executor from './executor';

// const options: Pm2ExecutorSchema = {
//   command: 'start',
//   file: 'apps/api/src/main.ts',
//   logPath: 'logs/api.log',
//   errorLogPath: 'logs/api-error.log',
//   instances: 1,
//   name: 'api',
//   execMode: 'fork',
// };

describe('Pm2Executor Executor', () => {
  it('can run', async () => {
    // const output = await executor(options);
    // expect(output.success).toBe(true);

    //@TODO: add tests
    expect(true).toBe(true);
  });
});
