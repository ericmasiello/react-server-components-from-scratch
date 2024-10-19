import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from "node:fs/promises";
    
const __dirname = dirname(fileURLToPath(import.meta.url));

// check if dist folder exists
try {
    await fs.access(`${__dirname}/dist`);
} catch (error) {
  // create the dist folder if it doesn't exist
  await fs.mkdir(`${__dirname}/dist`);
}

await fs.copyFile(`${__dirname}/main.css`, `${__dirname}/dist/main.css`);




