// @ts-check

import * as fs from 'fs/promises';
import { exit } from 'process';

/** @type {string[]} */
const buffer = [];
/** @type {Map<string, string>} */
const methodHeaders = new Map();

async function readExampleFile(fileName = '') {
	try {
		const contents = await fs.readFile(`examples/${fileName}`, {
			encoding: 'utf-8',
		});
		const lines = contents.split('\n');
		const fileBuffer = [];
		for (const line of lines) {
			if (line.startsWith('### ') || line.length === 0) {
				fileBuffer.push(line);
			} else if (line.startsWith('#### ')) {
				fileBuffer.push(line);
				const methodName = line.replace('#### ', '').trim();
				console.log(methodName.trim());
				const methodInfo = methodHeaders.get(methodName) ?? '';
				fileBuffer.push(
					'\n##### Definition\n\n```ts\n' +
						methodInfo +
						'```\n\n##### Examples',
				);
			} else {
				fileBuffer.push(line);
			}
		}
		buffer.push(fileBuffer.join('\n'));
	} catch (err) {
		console.log(err);
		exit(1);
	}
}

async function readExamplesDirectory() {
	try {
		const files = await fs.readdir('examples', {
			encoding: 'utf-8',
			withFileTypes: true,
		});
		const filteredFiles = files.filter((file) => file.name.endsWith('.md'));
		for (const file of filteredFiles) {
			await readExampleFile(file.name);
		}
		await fs.appendFile('README.md', buffer.join('\n'), {
			encoding: 'utf-8',
		});
	} catch (err) {
		console.error(err);
		exit(1);
	}
}

async function getMethoHeaders() {
	try {
		const files = await fs.readdir('src', {
			encoding: 'utf-8',
			withFileTypes: true,
		});
		const filteredFiles = files.filter(
			(file) => file.name !== 'index.ts' && !file.isDirectory(),
		);
		for (const file of filteredFiles) {
			let isMethodHeader = false;
			let methodHeaderBuffer = [];
			const contents = await fs.readFile(`src/${file.name}`, {
				encoding: 'utf-8',
			});
			const lines = contents.split('\n');
			for (const line of lines) {
				if (!isMethodHeader && methodHeaderBuffer.length > 0) {
					const method = line
						.replace('export ', '')
						.replace(' {', '')
						.replace('\r', ';\n');
					methodHeaderBuffer.push(method);
					const methodName = method
						.substring(0, method.indexOf('('))
						.replace(/<(.*?)>/g, '')
						.split(' ');
					methodHeaders.set(
						methodName.at(methodName.length - 1) ?? '',
						methodHeaderBuffer.join('\n'),
					);
					methodHeaderBuffer = [];
					isMethodHeader = false;
				}
				if (line.startsWith('/**')) {
					isMethodHeader = true;
				}
				if (isMethodHeader) {
					methodHeaderBuffer.push(line);
				}
				if (line.trim().startsWith('*/')) {
					isMethodHeader = false;
				}
			}
		}
	} catch (err) {
		console.error(err);
		exit(1);
	}
}

async function generateREADME() {
	try {
		await fs.writeFile(
			'README.md',
			`# flipper

A package for utility functions & templates that can be reused in projects

---

-   [flipper](#flipper)
    -   [Utility functions](#utility)
        -   [Dates](#dates)
            -   [msToTimestamp](#mstotimestamp)
            -   [msToTime](#mstotime)
            -   [dateToUTC](#datetoutc)
        -   [String](#string)
            -   [getInitials](#getinitials)
            -   [capitalize](#capitalize)
            -   [ellipse](#ellipse)
        -   [Math](#math)
            -   [round](#round)
            -   [fix](#fix)
        -   [Shuffle](#shuffle)
            -   [shuffle](#shuffle)

## Utility\n\n`,
		);
		await getMethoHeaders();
		console.log(methodHeaders);
		await readExamplesDirectory();
	} catch (err) {
		console.error(err);
		exit(1);
	}
}

generateREADME();
