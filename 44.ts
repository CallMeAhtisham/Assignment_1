/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should print
a summary of the sandwich that is being ordered. Call the function three times, using a different number
of arguments each time. */

let ordered_sandwich = (...items: string[]) => {
    console.log(`
    Summary of Sandwich:
    ${items}
    ---------------------------------------------`)
}

ordered_sandwich("Cheese", "Mayonaise", "Egg")

ordered_sandwich("Meat", "Peanut Butter", "Ketchup")

ordered_sandwich("Extra Cheese", "Mayonaise", "Ketchup", "Egg")