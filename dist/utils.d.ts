declare const BASE_PX = 16;
declare const TAILWIND_CONFIG_PATH = "./tailwind.config.cjs";
interface ExecResult {
    exit_code: number;
    stdout: string;
    stderr: string;
}
declare const exec: (name: string, args: string[]) => Promise<ExecResult>;
export { BASE_PX, TAILWIND_CONFIG_PATH, exec };
