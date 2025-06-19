export const prefixTitle = (prefix: string) => {
  if (!prefix) {
    return "Simple TS";
  }
  return `${prefix} - Simple TS`;
};
