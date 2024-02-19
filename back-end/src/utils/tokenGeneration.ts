import { BinaryLike, createHash } from 'crypto';

function hash(string: BinaryLike) {
  return createHash('sha256').update(string).digest('hex');
}

export const generateToken = (telegramID: number) => {
  const randomPart1 = Math.random().toString(36).slice(2, 6);
  const randomPart2 = Math.random().toString(36).slice(2, 6);
  const randomPart3 = Math.random().toString(36).slice(2, 6);

  const not_hashed_token = `${telegramID}-${randomPart1}-${randomPart2}-${randomPart3}`
  return hash(not_hashed_token);
}