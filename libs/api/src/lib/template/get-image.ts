import { sanitizeHtml } from '../sanitizer';
import * as fs from 'fs';

export function getImage(src: string, width = 'auto', height = '225') {
  let filename = `${__dirname}/../../../../../node_modules/heroicons/outline/${sanitizeHtml(
    src
  )}.svg`;

  if (!fs.existsSync(filename)) {
    filename = `${__dirname}/../../../../../node_modules/simple-icons/icons/${sanitizeHtml(
      src
    )}.svg`;
  }

  if (fs.existsSync(filename)) {
    const iconContent = fs.readFileSync(filename).toString();

    return iconContent.replace(
      '<svg ',
      `<svg style="width: ${sanitizeHtml(
        width
      )}px; height: ${sanitizeHtml(
        height
      )}px;" class="-mt-24 fill-current text-icon"`
    );
  }

  return `<img
        class="logo"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`;
}
