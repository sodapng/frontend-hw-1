// @ts-nocheck

import { isNumber } from './sum';

const patchArrays = (): void => {
  Object.assign(Array.prototype, {
    count: function (this: []) {
      return this.length;
    },

    insert: function (this: [], idx: number, element: any) {
      if (!isNumber(idx)) {
        throw new Error('INVALID_ARGUMENT');
      }

      this.splice(idx < 0 ? 0 : idx, 0, element);

      return this;
    },

    remove: function (this: [], element: any) {
      const idx = this.findIndex((value) => value === element);
      this.splice(idx, 1);

      return this;
    },
  });
};

export default patchArrays;
