import { Theme } from '../types';

export function getWatermark(theme: Theme) {
  const className =
    theme === 'dark' ? 'opacity-25 text-white' : 'opacity-50 text-black';

  return `<div class="absolute bottom-0 right-0 opacity-25 text-2xl ${className} p-8">Generated using banners.adrianub.vercel.app</div>`;
}
