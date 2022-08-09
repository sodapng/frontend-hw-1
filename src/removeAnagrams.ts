const isStrings = (...args: any[]) =>
  args.every((arg) => typeof arg === 'string');

interface IAcc {
  [key: string]: {
    word: string;
    length: number;
  };
}

const removeAnagrams = (arr: string[]) => {
  if (!Array.isArray(arr)) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (!isStrings(...arr)) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  return Object.entries(
    arr.reduce((acc: IAcc, word) => {
      const key = word.split('').sort().join('');

      acc[key] = {
        word,
        length: acc[key]?.length ? acc[key].length + 1 : 1,
      };

      return acc;
    }, {})
  )
    .filter(([_, value]) => value.length === 1)
    .map(([_, value]) => value.word);
};

export default removeAnagrams;
