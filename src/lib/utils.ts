export const convertToSlug = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};
