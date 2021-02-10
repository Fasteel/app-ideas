// eslint-disable-next-line import/prefer-default-export
export const onlyUnique = (
  value: string | number,
  index: number,
  self: Array<number | string>
): boolean => {
  return self.indexOf(value) === index;
};
