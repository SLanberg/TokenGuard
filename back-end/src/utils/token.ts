export const generateToken = (telegramID: number) => {
  const randomPart1 = Math.random().toString(36).slice(2, 6);
  const randomPart2 = Math.random().toString(36).slice(2, 6);
  const randomPart3 = Math.random().toString(36).slice(2, 6);
  const randomPart4 = Math.random().toString(36).slice(2, 6);

  // Here is used telegramID to ensure uniqueness of the generated token,
  // To avoid collisions. It can of course be done with other perfect hash functions alternative
  // But since this is a race with time and time is very short we will do it like that.
  //
  // The best approach is to take telegramID -> generate unique hash based on it
  // and do the same for the part 1, 2, 3, 4
  // of course it is important to implement also such
  // thing as user enters incorrect token 3 times -> we freeze or block account to prevent Brute Force
  // currently such security measures is not implemented
  return `${telegramID}-${randomPart1}-${randomPart2}-${randomPart3}-${randomPart4}`;
}