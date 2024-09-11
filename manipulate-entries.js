function filterEntries(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback([key, value]))
    );
  }

  function mapEntries(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => callback([key, value]))
    );
  }

  function reduceEntries(obj, callback, initialValue) {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => callback(acc, [key, value]),
      initialValue
    );
  }