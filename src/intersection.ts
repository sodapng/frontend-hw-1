const isNumbers = (...args: any[]) => args.every((n) => typeof n === 'number');

const intersection = (a: number[], b: number[]) => {
  if (!a || !b) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (!isNumbers(...a, ...b)) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  return a.reduce(
    (acc: number[], n) =>
      !acc.includes(n) && b.includes(n) ? acc.push(n) && acc : acc,
    []
  );
};

export default intersection;
