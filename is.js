const is = {};
is.number = (num) => typeof num === 'number',
is.nan = (num) => Number.isNaN(num),
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) => value === undefined;
is.def = (value) => value !== undefined;
is.arr = (value) => Array.isArray(value);
is.obj = (value) => value !== null && typeof value === 'object';
is.fun = (value) => typeof value === 'function';
is.truthy = (value) => !!value;
is.falsy = (value) => !value;