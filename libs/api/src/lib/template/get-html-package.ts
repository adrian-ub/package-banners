import marked from 'marked';
import { sanitizeHtml } from '../sanitizer';
import { ParsedRequest } from '../types';
import { emojify } from './emojify';
import { getDescription } from './get-description';
import { getImage } from './get-image';
import { getPackageName } from './get-package-name';
import { getPlusSign } from './get-plus-sign';
import { getWatermark } from './get-wakermark';
import { HtmlBase } from './html-base';

export function getHtmlPackage(parsedReq: ParsedRequest) {
  const {
    text,
    theme,
    md,
    images,
    widths,
    heights,
    packageManager,
    packageName,
    description,
    showWatermark,
  } = parsedReq;

  const html = `
    <body class="h-screen w-screen flex items-center justify-center text-center">
      <div>
        <div class="flex items-center justify-center space-x-4">
          ${images
            .map(
              (img, i) => getPlusSign(i) + getImage(img, widths[i], heights[i])
            )
            .join('')}
          </div>
          <div class="heading py-12">
            ${emojify(md ? marked(text) : sanitizeHtml(text))}
          </div>
          ${getDescription(description)}
          ${getPackageName(packageManager, packageName)}
          ${showWatermark ? getWatermark(theme) : ''}
        </div>
      </body>
    `;

  return HtmlBase(parsedReq, html);
}
