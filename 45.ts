/* Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as a color
or an optional feature. Print the Object that’s returned to make sure all the information was stored
correctly. */

interface Car {
     manufacturer: string
     model_name: string
     [x: string]: any
}

let car = (manufacturer: string, model_name: string, ...options: [string, any][]) => {
     let car: Car = {
         manufacturer,
         model_name
     }

     options.forEach(([key, value]) => car[key] = value)

     return car
}

console.log(car("Toyota", "2020", ["Color", "Red"], ["Extra_Feature", "Turbo Engine"]))