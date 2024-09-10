const filterValues = (obj, callback) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (callback(value)) {
        result[key] = value;
      }
    }
    return result;
  }

  function mapValues(obj, callback) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = callback(value);
    }
    return result;
  }