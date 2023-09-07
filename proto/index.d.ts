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
