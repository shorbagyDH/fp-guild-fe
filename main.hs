fizzBuzz :: Int -> String
fizzBuzz n
    | n `mod` 3 == 0 = "Fizz"
    | n `mod` 5 == 0 = "Buzz"
    | n `mod` 15 == 0 = "FizzBuzz"
    | otherwise = show n
