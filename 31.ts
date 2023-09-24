/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

import usernames from "./30"

if (usernames.length == 0) {
     console.log("We need more users!")
} else {
     console.log("The list is not empty.")
}

while (usernames.length > 0) {
     usernames.splice(0,6)
     if (usernames.length == 0) {
         console.log("We need more users.")
     } else {
         console.log("The list is not empty.")
     }
}
