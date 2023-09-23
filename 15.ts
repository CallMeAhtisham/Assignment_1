/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

import guests from "./14"

let remove_guest = "Husnian"
guests.pop()
let new_guest = "Hamza"
guests.push(new_guest)

for (let c = 0; c < guests.length; c++) {
     console.log(`${guests[c]}, You're invited to dinner at my home tonight.`)
}

console.log("I just found a bigger table.")

export default guests