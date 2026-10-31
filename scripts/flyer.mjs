// Genera public/flyer-wb-hair-studio.pdf desde la página /flyer/.
import { existsSync, globSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { build, preview } from 'astro';
import { chromium } from 'playwright-core';

const salida = 'public/flyer-wb-hair-studio.pdf';
const chrome =
  process.env.CHROME_PATH ??
  globSync(join(homedir(), '.cache/ms-playwright/chromium-*/chrome-linux64/chrome')).sort().pop();

if (!chrome || !existsSync(chrome)) {
  throw new Error('No encontré Chromium: define CHROME_PATH con la ruta del navegador.');
}

await build({ logLevel: 'error' });
const servidor = await preview({ logLevel: 'error', server: { port: 4322, host: '127.0.0.1' } });
const navegador = await chromium.launch({ executablePath: chrome });

try {
  const pagina = await navegador.newPage();
  await pagina.goto('http://127.0.0.1:4322/flyer/', { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.pdf({ path: salida, preferCSSPageSize: true, printBackground: true });
  console.log(`${salida}: ${(statSync(salida).size / 1024).toFixed(0)} KB`);
} finally {
  await navegador.close();
  await servidor.stop();
}
