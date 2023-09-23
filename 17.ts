/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to
dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */

import guests from "./16"

console.log("The new dinner table will not arrive in time. That's why I can invite only two people.")

while (guests.length > 2) {
     let remove_guest = guests.pop()
      console.log(`${remove_guest}, I'm sorry. I can't invit you to dinner.`)
}

for (let guest of guests) {
     console.log(`${guest}, You're still invited.`)
}

while (guests.length > 0) {
     let remove_guest = guests.splice(0)
     console.log(guests)
}

export default guests