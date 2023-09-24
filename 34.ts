/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and
then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
output should consist of three or more lines about the kinds of pizza you like and then an additional
sentence, such as I really love pizza! */

let pizzas = ["Pepperoni Pizza", "Chicken Tikka Pizza", "Barbeque Crust Pizza"]

for (let pizza of pizzas) {
     console.log(pizza)
}

for (let pizza of pizzas) {
     console.log(`I like ${pizza}.`)
}

console.log(`There are many kinds of pizzas. But i like these 3 pizzas i.e Barbeque Crust Pizza, Chicken
Tikka Pizza, and Pepperoni pizza. These pizzas are one of the best pizzas in the world. I can eat these
pizzas as many as you can afford. I really love pizza!`)