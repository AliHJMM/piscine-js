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

  const reduceValues = (obj, callback, acc) => {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
  }