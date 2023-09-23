/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name. */

import friends_name from "./11"

let friends_message = "You're awesome."
for (let c = 0; c < friends_name.length; c++) {
     console.log(`${friends_name[c]}, ${friends_message}`)
}