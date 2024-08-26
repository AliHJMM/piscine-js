const is = {
    num: (value) => typeof value === 'number',
    nan: (value) => Number.isNaN(value),
    str: (value) => typeof value === 'string',
    bool: (value) => typeof value === 'boolean',
    undef: (value) => value === undefined,
    def: (value) => value !== undefined,
    arr: (value) => Array.isArray(value),
    obj: (value) => value !== null && typeof value === 'object',
    fun: (value) => typeof value === 'function',
    truthy: (value) => !!value,
    falsy: (value) => !value,
  };
  