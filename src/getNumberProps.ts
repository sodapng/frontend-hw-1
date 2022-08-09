import { isNumber } from './sum';

const isObject = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Object]';

const getNumberProps = (obj: { [key: string]: any }): string[] => {
  if (!isObject(obj)) {
    throw new Error('INVALID_ARGUMENT');
  }

  return Object.keys(obj)
    .reduce((acc: string[], key) => {
      const value = obj[key];

      if (isNumber(value)) {
        acc.push(key);
      }

      if (isObject(value)) {
        return acc.concat(getNumberProps(value));
      }

      return acc;
    }, [])
    .sort();
};

export default getNumberProps;
