import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;

const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stat = fs.statSync(filePath);
  const sizeBefore = stat.size;

  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();
    const { width, height } = metadata;

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline
        .resize(width > MAX_WIDTH ? MAX_WIDTH : null, null, { withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline
        .resize(width > MAX_WIDTH ? MAX_WIDTH : null, null, { withoutEnlargement: true })
        .png({ quality: PNG_QUALITY, compressionLevel: 9 });
    } else {
      return;
    }

    const buffer = await pipeline.toBuffer();
    fs.writeFileSync(filePath, buffer);
    const sizeAfter = buffer.length;
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(`${path.basename(filePath)}: ${(sizeBefore / 1024).toFixed(0)} KB → ${(sizeAfter / 1024).toFixed(0)} KB (${saved}% smaller)`);
  } catch (err) {
    console.error(`Error compressing ${filePath}:`, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(publicDir)
    .filter((f) => imageExtensions.includes(path.extname(f).toLowerCase()))
    .map((f) => path.join(publicDir, f));

  console.log(`Compressing ${files.length} images...\n`);
  for (const file of files) {
    await compressImage(file);
  }
  console.log('\nDone.');
}

main();
