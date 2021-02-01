import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest, TypeBanner } from '../types';
import { getArray } from './get-array';
import { getDefaultImages } from './get-default-images';

export function parseRequest(req: IncomingMessage) {
  console.log('HTTP ' + req.url);
  const { pathname, query } = parse(req.url || '/', true);
  const {
    fontSize,
    images,
    widths,
    heights,
    theme,
    md,
    showWatermark,
    pattern,
    packageManager,
    packageName,
    description,
    style,
    author,
    username,
    type,
    date,
    logo,
  } = query || {};

  if (Array.isArray(fontSize)) {
    throw new Error('Expected a single fontSize');
  }
  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }
  if (Array.isArray(style)) {
    throw new Error('Expected a single style');
  }
  if (Array.isArray(pattern)) {
    throw new Error('Expected a single pattern');
  }
  if (Array.isArray(packageManager)) {
    throw new Error('Expected a single package manager');
  }
  if (Array.isArray(packageName)) {
    throw new Error('Expected a single package name');
  }
  if (Array.isArray(description)) {
    throw new Error('Expected a single package name');
  }

  if (Array.isArray(author)) {
    throw new Error('Expected a single author');
  }

  if (Array.isArray(username)) {
    throw new Error('Expected a single username');
  }

  if (Array.isArray(type)) {
    throw new Error('Expected a single type');
  }

  if (Array.isArray(date)) {
    throw new Error('Expected a single date');
  }

  if (Array.isArray(logo)) {
    throw new Error('Expected a single logo');
  }

  if (type !== 'banner' && type !== 'package' && type !== undefined) {
    throw new Error('Expected a type banner or package');
  }

  const arr = (pathname || '/').slice(1).split('.');
  let extension = '';
  let text = '';
  if (arr.length === 0) {
    text = '';
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop() as string;
    text = arr.join('.');
  }

  let typeBanner: TypeBanner = 'banner';

  if (type === 'banner' || type === 'package') {
    typeBanner = type;
  }

  const parsedRequest: ParsedRequest = {
    fileType: extension === 'jpeg' ? extension : 'png',
    text: decodeURIComponent(text),
    theme: theme === 'dark' ? 'dark' : 'light',
    md: md === '1' || md === 'true',
    showWatermark: showWatermark === '1' || showWatermark === 'true',
    fontSize: fontSize || '96px',
    pattern: pattern || 'circuitBoard',
    packageManager: packageManager || '',
    packageName: packageName || '',
    description: description || '',
    images: getArray(images),
    widths: getArray(widths),
    heights: getArray(heights),
    author: author || '',
    username: username || '',
    type: typeBanner,
    date: date || '',
    logo: logo || '',
  };
  parsedRequest.images = getDefaultImages(parsedRequest.images);
  return parsedRequest;
}
