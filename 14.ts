/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
that includes at least three people you’d like to invite to dinner. Then use your list to print a message
to each person, inviting them to dinner. */

let guests = ["Ahtisham", "Usman", "Husnain"]
for (let c = 0; c < guests.length; c++) {
     console.log(`${guests[c]}, Today is dinner at my home and you're invited.`)
}

console.log("Husnain can't make the dinner.")

export default guests