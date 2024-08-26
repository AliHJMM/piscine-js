const dogYears = (planetName, dogAgeinSeconds) => {
    const earthInDogYears = 7, earthInSeconds = 31557600, planetInSeconds = {
    earth: earthInSeconds,
    mercury: earthInSeconds * 0.2408467,
    venus: earthInSeconds * 0.61519726,
    mars: earthInSeconds * 1.8808158,
    jupiter: earthInSeconds * 11.862615,
    saturn: earthInSeconds * 29.447498,
    uranus: earthInSeconds * 84.016846,
    neptune: earthInSeconds * 164.79132,
  };
  return Number((dogAgeinSeconds / planetInSeconds[planetName] / earthInDogYears).toFixed(2));
};;