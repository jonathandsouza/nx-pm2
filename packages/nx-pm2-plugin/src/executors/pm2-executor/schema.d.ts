export interface Pm2ExecutorSchema {
	command: string;
	file: string;
	logPath: string;
	errorLogPath: string;
	instances?: number;
	name: string;
	execMode?: "cluster" | "fork";
	mergeLogs?: boolean;
}