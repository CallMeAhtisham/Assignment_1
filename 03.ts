/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase. */

let persone_name = "Ahtisham"
console.log(`In upper case: ${persone_name.toUpperCase()}`)
console.log(`In lower case: ${persone_name.toLowerCase()}`)
console.log(`In title case: ${persone_name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)
.toLowerCase()).join(" ")}`)