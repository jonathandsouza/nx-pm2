import { Pm2ExecutorSchema as Pm2ExecutorSchema } from './schema';
import executor from './executor';

const options: Pm2ExecutorSchema = {};

describe('Pm2Executor Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
