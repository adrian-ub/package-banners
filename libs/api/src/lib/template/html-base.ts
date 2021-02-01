import { ParsedRequest } from '../types';
import { getCss } from './get-css';

export function HtmlBase(parsedReq: ParsedRequest, html: string) {
  const { theme, fontSize, pattern } = parsedReq;

  return `
  <!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">

        <style>
            ${getCss(theme, pattern, fontSize)}
        </style>
            ${html}
        </html>
    `;
}
