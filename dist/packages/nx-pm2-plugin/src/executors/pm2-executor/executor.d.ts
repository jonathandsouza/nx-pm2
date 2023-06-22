import { Pm2ExecutorSchema } from './schema';
export default function runExecutor(options: Pm2ExecutorSchema): Promise<{
    success: boolean;
}>;
