import { isNumber } from './sum';

const planEvent = <T extends (...args: any) => any>(
  cb: T,
  timeout: number
): Promise<ReturnType<T>> => {
  if (typeof cb !== 'function' || !isNumber(timeout)) {
    throw new Error('INVALID_ARGUMENT');
  }

  return new Promise((resolve) => setTimeout(() => resolve(cb()), timeout));
};

export default planEvent;
