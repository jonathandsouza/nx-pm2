export interface Pm2ExecutorSchema {
        name: string;
        instances?: string | number;
        max_memory_restart?: string;
        log_date_format?: string;
        merge_logs?: boolean;
        autorestart?: boolean;
        log_file?: string;
        out_file?: string;
        error_file?: string;
        pid_file?: string;
		command: string;
}
