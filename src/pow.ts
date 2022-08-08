import { isNumber } from './sum';

const pow = (a: number, b?: number): number | ((b: number) => number) => {
  if (typeof b === 'undefined') {
    return pow.bind(null, a);
  }

  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('INVALID_ARGUMENT');
  }

  return Math.pow(a, b);
};

export default pow;
