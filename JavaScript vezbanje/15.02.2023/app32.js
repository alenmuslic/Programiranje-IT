// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
const miles = [55, 78, 140, 121, 96, 100, 67];
const totalKilometers = (arr) => {
  const totalDistanceInKilometers = arr
    .map((el) => el * 1.61)
    .reduce((prev, curr) => prev + curr);
  return totalDistanceInKilometers;
};

console.log(totalKilometers(miles));
