// associative

add(x, y) === add(y, x)
add(x, add(y, z)) === add(z, add(x, y))
add(x, 0) === x
add(multiply(x, y), multiply(x, z)) === add(x, multiply(y, z))

// commutative

// identity

// distributive
