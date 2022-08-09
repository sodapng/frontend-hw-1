export const isNumber = (n: any) => typeof n === 'number';

const sum = (...params: number[]) => {
  if (params.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  return params.reduce((a, b) => {
    if (!isNumber(b)) {
      throw new Error('INVALID_ARGUMENT');
    }

    return a + b;
  }, 0);
};

export default sum;
