const { compose, trim, toUpper, split } = require('ramda');
// Currying
// replace = str => searchValue => replacement => str.replace(searchValue, replacement);
// replace = (searchValue) => (replacement) => (str) =>
//   str.replace(searchValue, replacement);

// const replaceD = replace('d');
// const putN = replaceD('n')
// const replaceDWithN = replace('d', 'n');
// const replaceDone = replace('done', '---');

// replace = (str, searchValue, replacement) =>
//   str.replace(searchValue, replacement);
// console.log(putN('abcdef'));

// Composition

// compose => f . g === f(g(x)) ==> add . sub => add(sub(x))
// pipe => g . f === f(g(x)) ===> sub . add => add(sub(x))

const trimAndToUpper = compose(trim, split(','));


console.log(trimAndToUpper('hello, world'))












