/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end
of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
once, so the whitespace around the name is displayed. Then print the name after striping the white
spaces. */

let person_Name = "\n Ahtisham Ahmed \t"
console.log(`Name including whitespace characters: ${person_Name}`)
console.log(`Name after striping the whitespace characters: ${person_Name.trim()}`)