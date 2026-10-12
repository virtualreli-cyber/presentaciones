import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { scanCurriculum } from './scan.mjs';

const PORT = 8080;

// Escanear catálogo antes de arrancar
console.log('🔍 Actualizando catálogo para el portal...');
await scanCurriculum();

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0].split('#')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = '';

  // Servir portal desde portal/ o dist/
  if (reqUrl.startsWith('/decks/')) {
    // Si se solicitó un deck compilado en dist
    filePath = path.join(process.cwd(), 'dist', reqUrl);
  } else {
    // Servir portal directamente
    filePath = path.join(process.cwd(), 'portal', reqUrl);
    if (!fs.existsSync(filePath) && fs.existsSync(path.join(process.cwd(), 'dist', reqUrl))) {
      filePath = path.join(process.cwd(), 'dist', reqUrl);
    }
  }

  // Si no existe, probar con index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found - ' + reqUrl);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n======================================================`);
  console.log(`  🚀 Portal de Presentaciones en marcha`);
  console.log(`  🌐 Accede en: ${url}`);
  console.log(`======================================================\n`);
});
