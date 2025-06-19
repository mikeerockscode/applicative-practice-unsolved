import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...

  //   return data.planets.reduce((sum, planets) => {
  //     return (sum + planets.avgTemp / planets.length);
  //   }, 0);
  // }
  // console.log(getAveragePlanetsTemperature(data));

  const totalTemp = data.planets.reduce((sum, planet) => {
    return sum + (planet.avgTemp || 0); // account for missing avgTemp
  }, 0);

  const count = data.planets.filter(
    (planet) => planet.avgTemp !== undefined
  ).length;
  return +(totalTemp / count); // round to 2 decimal places
}

console.log(getAveragePlanetsTemperature(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
