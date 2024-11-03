#!/usr/bin/env node

import * as util from 'util'
import { exec } from 'child_process'
const asyncExec = util.promisify(exec);

async function checkReadmeStatus() {
    await asyncExec("pnpm build:readme");
    await asyncExec("pnpm prettier --write README.md");
    const { stdout } = await asyncExec("git diff --stat README.md");
    return stdout.length > 0 ? 'true' : 'false';
}
process.stdout.write(await checkReadmeStatus());