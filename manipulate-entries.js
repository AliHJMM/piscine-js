function filterEntries(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback([key, value]))
    );
  }