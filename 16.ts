/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
list. • Print a new set of invitation messages, one for each person in your list. */

import guests from "./15"

let new_guest = "Awais"
guests.unshift(new_guest)

new_guest = "Arslan"
guests.splice(2,0, new_guest)

new_guest = "Sohaib"
guests.push(new_guest)

for (let c = 0; c < guests.length; c++) {
     console.log(`${guests[c]}, Tonight is dinner at my home and you have to come.`)
}

export default guests