// Identity Functor (Box)

// Either Monad
// Either Class
const Right = (x) => ({
  map: (f) => Right(f(x)),
  toString: `Right(${x})`,
  fold: (f, g) => g(x),
});

const Left = (x) => ({
  map: (f) => Left(x),
  toString: `Left(${x})`,
  fold: (f, g) => f(x),
});

// T :: T

const fromNullable = (x) => (x != null ? Right(x) : Left('value is empty!'));

const str = null;

const state = {
    data: [],
}

console.log(
  fromNullable(str)
    .map((x) => x.trim())
    .map((x) => parseInt(x) + 1)
    .map((x) => String.fromCharCode(x))
    .fold(
      (x) => ['name'],
      (x) => x
    )
);
