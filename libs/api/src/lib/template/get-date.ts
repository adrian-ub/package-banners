export function getDate(date: string) {
  if (!date) return;

  return `
    <div class="flex items-center space-x-4 profile">
        <div class="text-4xl font-bold">•</div>
        <div class="text-2xl">${date}</div>
    </div>
    `;
}
