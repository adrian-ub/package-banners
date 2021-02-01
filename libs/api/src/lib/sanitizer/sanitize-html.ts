const entityMap: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};

export function sanitizeHtml(html: string) {
  // eslint-disable-next-line no-useless-escape
  return String(html).replace(/[&<>"'\/]/g, (key) => entityMap[key]);
}
