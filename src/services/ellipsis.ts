export function ellipsis(text: string, limit = 78): string {
  if (text.length <= limit) return text;
  const sliced = text.slice(0, limit).trim();
  return sliced.endsWith(".") ? sliced : sliced + "...";
}
