import * as SimpleIcons from 'simple-icons';

const icons: { text: string; value: string }[] = [];

for (const property in SimpleIcons) {
  const icon = SimpleIcons.get(property);
  const { title, slug } = icon;

  icons.push({ text: title, value: slug });
}

export function all() {
  return icons;
}
