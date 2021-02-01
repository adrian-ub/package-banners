export function getDefaultImages(images: string[]): string[] {
  const defaultImage = '';

  if (!images || !images[0]) {
    return [defaultImage];
  }
  return images;
}
