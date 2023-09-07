if (!Object.prototype.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (key: PropertyKey): boolean {
    return Object.keys(this).indexOf(key.toString()) !== -1;
  };
}
if (!Object.prototype.entries) {
  Object.entries = function (o: { [x: string]: any }): Array<any> {
    var result: Array<any> = [];
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        console.log(key);
        result.push({ [key]: o[key] });
      }
    }
    return result;
  };
}
if (!Object.entries) {
  Object.entries = function (o: { [x: string]: any }): Array<any> {
    var result: Array<any> = [];
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        result.push({ [key]: o[key] });
      }
    }
    return result;
  };
}
