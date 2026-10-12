import fs from 'node:fs';
import path from 'node:path';

// Patch code.css in @slidev/client if present to avoid lightningcss syntax error
const possiblePaths = [
  path.resolve('node_modules/@slidev/client/styles/code.css'),
  path.resolve('Slidev/plantilla/node_modules/@slidev/client/styles/code.css')
];

for (const cssPath of possiblePaths) {
  if (fs.existsSync(cssPath)) {
    let content = fs.readFileSync(cssPath, 'utf8');
    let changed = false;

    if (content.includes('--uno: w-4 mr-6 text-gray-400 dark-text-gray-600;')) {
      content = content.replace(
        '--uno: w-4 mr-6 text-gray-400 dark-text-gray-600;',
        'width: 1rem;\n  margin-right: 1.5rem;\n  color: #9ca3af;'
      );
      changed = true;
    }

    if (content.includes('--uno: font-light py-0.5 px-1.5;')) {
      content = content.replace(
        '--uno: font-light py-0.5 px-1.5;',
        'font-weight: 300;\n  padding: 0.125rem 0.375rem;'
      );
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(cssPath, content, 'utf8');
      console.log(`[patch] Patched lightningcss issue in ${cssPath}`);
    }
  }
}
