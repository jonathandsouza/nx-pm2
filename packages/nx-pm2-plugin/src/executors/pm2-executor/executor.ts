import { Pm2ExecutorSchema as Pm2ExecutorSchema } from './schema';

export default async function runExecutor(options: Pm2ExecutorSchema) {
  console.log('Executor ran for Pm2Executor', options);
  return {
    success: true,
  };
}
