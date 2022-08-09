const isString = (str: any) => typeof str === 'string';

const sort = (str: string) => {
  if (!isString(str)) {
    throw new Error('INVALID_ARGUMENT');
  }

  return str
    .toLowerCase()
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .map((n) => n.split('').sort().join(''))
    .join(' ');
};

export default sort;
