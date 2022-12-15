// https://stackoverflow.com/questions/54919522/lodash-differenceby-in-vanilla-javascript
export const differenceBy = (array1, array2, key) => {
  return array1.filter(a => !array2.some(b => b[key] === a[key]));
};

// https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
export const shuffle = arr => arr.sort(() => Math.random() - 0.5);
