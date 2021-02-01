import marked from 'marked';
import { sanitizeHtml } from '../sanitizer';
import { emojify } from './emojify';

export function getHeader(text: string, md: boolean) {
  return `
    <div class="heading flex items-center">
      ${emojify(md ? marked(text) : sanitizeHtml(text))}
    </div>
  `;
}
