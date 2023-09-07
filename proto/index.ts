interface ObjectConstructor {
  haskey<T, Key extends keyof T>(obj: T, k: Key): boolean;
}

interface Object {
  haskey<This, Key extends keyof This>(this: This, key: Key): boolean;
  keys: () => Array<string>;
  entries: (o: { [x: string]: any }) => Array<any>;
}

interface Array<T> {
  inArray: (search: string[] | string) => boolean;
}

if (!Object.prototype.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (key: PropertyKey): boolean {
    return Object.keys(this).indexOf(key.toString()) !== -1;
  };
}

Object.prototype.haskey = function <O, K extends keyof O>(this: O, key: K): boolean {
  return Object.prototype.hasOwnProperty.call(this, key);
};
Object.haskey = function haskey<T, Key extends keyof T>(obj: T, k: Key): boolean {
  return Object.prototype.hasOwnProperty.call(obj, k);
};

Object.prototype.keys = function () {
  return [...Object.keys(this)];
};

Array.prototype.inArray = function (search: string[] | string): boolean {
  let output: boolean = false;
  const _array = this;
  if (Array.isArray(search)) {
    search.map((s) => (output = _array.indexOf(s) !== -1));
  } else {
    return _array.indexOf(search) !== -1;
  }
  return output;
};
