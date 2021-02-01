import { ParsedRequest } from '../types';
import { getDate } from './get-date';
import { getHeader } from './get-header';
import { getImage } from './get-image';
import { getPlusSign } from './get-plus-sign';
import { getProfile } from './get-profile';
import { getWatermark } from './get-wakermark';
import { HtmlBase } from './html-base';

export function getHtmlBanner(parsedReq: ParsedRequest) {
  const {
    text,
    theme,
    md,
    username,
    author,
    showWatermark,
    date,
    logo,
    images,
  } = parsedReq;

  const html = `
    <body class="h-screen w-screen grid grid-rows-3 grid-cols-2 justify-between px-32">
      <div class="flex content-start items-end -ml-16 py-20">${getImage(
        logo,
        undefined,
        '150'
      )}</div>

      <div class="flex content-start col-span-2 items-start">
        ${getHeader(text, md)}
      </div>

      <div class="flex items-end">
        <div class="flex space-x-4 pb-24">
          <div class="flex items-center space-x-4">
            ${getProfile(username, author)}
          </div>
          ${getDate(date)}
        </div>
      </div>

      <div class="flex justify-end space-x-4 items-end pb-24">
        ${images
          .map(
            (img, i) =>
              `<div class="-mb-6">${getPlusSign(i)}</div> ${getImage(
                img,
                undefined,
                '100'
              )}`
          )
          .join('')}
        </div>

        ${showWatermark ? getWatermark(theme) : ''}
    </body>
  `;

  return HtmlBase(parsedReq, html);
}
