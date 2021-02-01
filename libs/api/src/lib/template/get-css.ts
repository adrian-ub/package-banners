import * as hero from 'hero-patterns';

import { sanitizeHtml } from '../sanitizer';
import { Theme } from '../types';

export function getCss(theme: Theme, pattern: string, fontSize: string) {
  let foreground = '#000000';
  let foregroundCode = '#ffffff';
  let background = '#ffffff';
  let backgroundCode = '#000000';
  let opacity = 0.07;

  if (theme === 'dark') {
    foreground = '#ffffff';
    foregroundCode = '#000000';
    background = '#000000';
    backgroundCode = '#ffffff';
    opacity = 0.15;
  }
  return `
    body {
        font-family: Inter;
        background-color: ${background};
        background-image: ${hero[pattern](foreground, opacity)}
    }

    code {
        color: ${foregroundCode};
        background-color: ${backgroundCode};
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0.75rem;
        font-size: 2vw;
        font-family: 'Space Mono';
        font-weight: bold;
        white-space: pre-wrap;
    }

    code:before, code:after {
        content: '';
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }

    .heading {
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        line-height: 1.2;
    }

    .description {
        color: ${foreground};
    }

    .profile {
        color: ${foreground};
    }

    .text-icon {
        color: ${foreground};
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }
    `;
}
