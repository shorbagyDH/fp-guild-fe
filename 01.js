/**
 *
 * Let's Set some Rules:
 *
 * 5. No Arrays => {  }
 * 1. No For Loops
 * 2. No If Statements => ternanry operator
 * 4. Fn is a Single Return =>
 * 6. No Assignments in Functions
 * 7. Functions has 0 or 1 param
 * 3. No Side Effects
 *
 *
 */

pairtToArray = (ps) => {
  const result = [];
  while (ps !== null) {
    result.push(head(ps));
    ps = tail(ps);
  }
  return result;
};

pair = (first) => (second) => ({ first, second });
head = (p) => p.first;
tail = (p) => p.second;

// FizzBuzz
// n % 3 -> Fizz
// n % 5 -> Buzz
// n % 15 -> FizzBuzz

range = (low) => (high) => low > high ? null : pair(low)(range(low + 1)(high));

map = (f) => (p) => p === null ? null : pair(f(head(p)))(map(f)(tail(p)));

fizzBuzz = (n) =>
  (n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n;

console.log(pairtToArray(map(fizzBuzz)(range(1)(100))));

