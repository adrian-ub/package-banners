import * as twemoji from 'twemoji';
const twOptions = {
  folder: 'svg',
  ext: '.svg',
  className: 'emoji inline-block',
};

export function emojify(text: string) {
  return twemoji.parse(text, twOptions);
}
