import { launch, Page } from 'puppeteer-core';
import { getOptions } from '../options';
let _page: Page | null;

export async function getPage(isDev: boolean) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await launch(options);
  _page = await browser.newPage();
  return _page;
}
