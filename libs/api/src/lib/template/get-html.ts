import { ParsedRequest } from '../types';
import { getHtmlBanner } from './get-html-banner';
import { getHtmlPackage } from './get-html-package';

export function getHtml(parsedReq: ParsedRequest) {
  return parsedReq.type === 'banner'
    ? getHtmlBanner(parsedReq)
    : getHtmlPackage(parsedReq);
}
