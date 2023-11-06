import { spawn } from "child_process";

const BASE_PX = 16;
const TAILWIND_CONFIG_PATH = "./tailwind.config.cjs";

interface ExecResult {
    exit_code: number;
    stdout: string;
    stderr: string;
}

const exec = async (name: string, args: string[]): Promise<ExecResult> => {
    return new Promise((resolve, reject) => {
        const child = spawn(name, args);
        console.log("Spawned child process:", child.pid);
        let stdout = Buffer.alloc(0);
        let stderr = Buffer.alloc(0);

        child.stdout.on("data", (data) => {
            stdout = Buffer.concat([stdout, data]);
        });

        child.stderr.on("data", (data) => {
            stderr = Buffer.concat([stderr, data]);
        });

        child.on("error", (error) => {
            reject({
                error,
                stdout: stdout.toString(),
                stderr: stderr.toString(),
            });
        });

        child.on("close", (code) => {
            if (code == null) {
                reject({
                    error: new Error("Process exited with null exit code."),
                    stdout: stdout.toString(),
                    stderr: stderr.toString(),
                });
                return;
            }
            resolve({
                exit_code: code,
                stdout: stdout.toString(),
                stderr: stderr.toString(),
            });
        });
    });
};

export { BASE_PX, TAILWIND_CONFIG_PATH, exec };
