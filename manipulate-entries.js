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

  function totalCalories(cart) {
    return reduceEntries(cart, (total, [item, grams]) => {
      const caloriesPer100g = nutritionDB[item].calories;
      return total + (caloriesPer100g * grams) / 100;
    }, 0);
  }

  function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
      const carbsPer100g = nutritionDB[item].carbs;
      return (carbsPer100g * grams) / 100 < 50;
    });
  }

  function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
      const nutritionPer100g = nutritionDB[item];
      const totalNutrition = {};
      for (const nutrient in nutritionPer100g) {
        totalNutrition[nutrient] = (nutritionPer100g[nutrient] * grams) / 100;
      }
      return [item, totalNutrition];
    });
  }