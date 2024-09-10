const filterValues = (obj, callback) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (callback(value)) {
        result[key] = value;
      }
    }
    return result;
  }