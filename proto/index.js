"use strict";
if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function (key) {
        return Object.keys(this).indexOf(key.toString()) !== -1;
    };
}
Object.prototype.haskey = function (key) {
    return Object.prototype.hasOwnProperty.call(this, key);
};
Object.haskey = function haskey(obj, k) {
    return Object.prototype.hasOwnProperty.call(obj, k);
};
Object.prototype.keys = function () {
    return [...Object.keys(this)];
};
Array.prototype.inArray = function (search) {
    let output = false;
    const _array = this;
    if (Array.isArray(search)) {
        search.map((s) => (output = _array.indexOf(s) !== -1));
    }
    else {
        return _array.indexOf(search) !== -1;
    }
    return output;
};
