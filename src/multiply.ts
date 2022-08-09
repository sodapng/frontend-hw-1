import { isNumber } from './sum';

const multiply = (a: number) => {
  if (!isNumber(a)) {
    throw new Error('INVALID_ARGUMENT');
  }

  return (b: number) => {
    if (!isNumber(b)) {
      throw new Error('INVALID_ARGUMENT');
    }

    return a * b;
  };
};

export default multiply;
