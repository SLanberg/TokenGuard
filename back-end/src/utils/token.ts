export const generateToken = (telegramID: number) => {
  const randomPart1 = Math.random().toString(36).slice(2, 6);
  const randomPart2 = Math.random().toString(36).slice(2, 6);
  const randomPart3 = Math.random().toString(36).slice(2, 6);
  const randomPart4 = Math.random().toString(36).slice(2, 6);

  const token = `${telegramID}-${randomPart1}-${randomPart2}-${randomPart3}-${randomPart4}`;
  return token;
}