/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to


• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

import car from "./23"

console.log("Is car == 'Subaru'? I predict True.")

console.log(car == "Subaru")

console.log("Is car == 'Nissan'? I predict False.")

console.log(car == "Nissan")

console.log("Is car != 'Subaru'? I predict False.")

console.log(car != "Subaru")

console.log("Is car != 'Nissan'? I predict True.")

console.log(car != "Nissan")

console.log("Is car.toLowerCase == 'nissan'? I predict Fasle.")

console.log(car.toLowerCase() == "nissan")

console.log("Is car.toLowerCase == 'subaru'? I predict True.")

console.log(car.toLowerCase() == 'subaru')

let number = 2

console.log("Is number == 2? I predict True.")

console.log(number == 2)

console.log("Is number == 3? I predict False.")

console.log(number == 3)

console.log("Is number != 3? I predict True.")

console.log(number != 3)

console.log("Is number != 2? I predict False.")

console.log(number != 2)

console.log("Is number > 2? I predict False.")

console.log(number > 2)

console.log("Is number > 1? I predict True.")

console.log(number > 1)

console.log("Is number < 2? I predict False.")

console.log(number < 2)

console.log("Is number < 3? I predict True.")

console.log(number < 3)

console.log("Is number >= 2? I predict True.")

console.log(number >= 2)

console.log("Is number >= 3? I predict False.")

console.log(number >= 3)

console.log("Is number <= 3? I predict True.")

console.log(number <= 3)

console.log("Is number <= 1? I predict False.")

console.log(number <= 1)

console.log("Is number < 2 && number < 3? I predict False.")

console.log(number < 2 && number < 3)

console.log("Is number < 1 && number > 3? I predict True.")

console.log(number > 1 && number < 3)

console.log("Is number <= 2 || number > 3? I predict True.")

console.log(number <= 2 || number > 3)

console.log("Is number < 1 || number > 4? I predict False.")

console.log(number < 1 || number > 4)

let array = [1, 2, 3, 4]

console.log("Is 3 present in the array? I predict True.")

console.log(array.includes(3))

console.log("Is 5 present in the array? I predict False.")

console.log(array.includes(5))

console.log("Is 2 not present in the array? I predict False.")

console.log(!array.includes(2))

console.log("Is 0 not present in the array? I predict True.")

console.log(!array.includes(0))