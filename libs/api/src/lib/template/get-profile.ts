export function getProfile(username: string, author: string) {
  let data = '';

  if (username) {
    data += `<img src="https://github.com/${username}.png?size=200" class="rounded-full w-20 inline-flex border-2 border-gray-900" />`;
  }

  if (author) {
    data += `<span class="text-4xl font-bold profile">${author}</span>`;
  }

  return data;
}
