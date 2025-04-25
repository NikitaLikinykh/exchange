export const isExpired = (exp: number): boolean => {
  const now = Math.floor(Date.now() / 1000);
  return exp < now;
};
