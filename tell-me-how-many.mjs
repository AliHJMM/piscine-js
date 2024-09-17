import { readdir } from 'node:fs/promises';
const args = process.argv.slice(2);
const arg = args[0];
const files = await readdir(arg);
console.log(files.length);