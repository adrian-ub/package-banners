import { sanitizeHtml } from '../sanitizer';

export function getDescription(description: string) {
  let data = '';

  if (description)
    data = `
    <p class="description mx-auto text-5xl pb-12 max-w-4xl">${sanitizeHtml(
      description
    )}</p>
    `;

  return data;
}
