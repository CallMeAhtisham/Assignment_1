/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified. */

import magicians from "./41"

let make_great = (magicians: string[]) => {
     let great_magicians = []
     for (let magician of magicians)
     great_magicians.push(`Great ${magician}`)

     return great_magicians
     }

console.log(make_great(magicians))

export {make_great}