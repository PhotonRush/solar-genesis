import { spawn } from 'child_process'
import { resolve } from 'path';
import { copyFile } from 'fs/promises';
import { npmRunPathEnv } from 'npm-run-path';

import environment from '../core/index.js';

function runCommand(command: string, args: Array<string>) {
    const actualCommand = environment.isWindows ? `${command}.cmd` : command;

    const spawnOptions = {
        cwd: environment.location,
        env: npmRunPathEnv({ cwd: environment.location }),
    };


    const child = spawn(actualCommand, args, spawnOptions);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}

function watchTypescript() {
    const command = 'tsc';
    const entry: string = resolve(environment.source.script, 'index.ts');

    const args: Array<string> = [
        entry,
        '--watch',
        '--outDir',
        environment.output.web.script,
    ];

    return runCommand(command, args);
}

function watchSass() {
    const command = 'sass';
    const entry: string = resolve(environment.source.style, 'index.scss');
    const output: string = resolve(environment.output.web.style, 'index.css');

    const args: Array<string> = [
        '--watch',
        entry,
        output,
    ];

    return runCommand(command, args);
}

await copyFile(environment.source.index, environment.output.web.index);

watchSass();
watchTypescript();
// watchIndex();
