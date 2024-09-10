const filterValues = (obj, callback) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (callback(value)) {
        result[key] = value;
      }
    }
    return result;
  }

  const mapValues = (obj, callback) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = callback(value);
    }
    return result;
  }

  function reduceValues(obj, callback, initialValue) {
    let accumulator = initialValue;
    for (const value of Object.values(obj)) {
      accumulator = callback(accumulator, value);
    }
    return accumulator;
  }