import { sanitizeHtml } from '../sanitizer';

export function getPackageName(packageManager: string, packageName: string) {
  let data = '';
  if (packageName) {
    data = `<code>${sanitizeHtml(packageManager)} ${sanitizeHtml(
      packageName
    )}</code>`;
  }
  return data;
}
