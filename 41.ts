/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array. */


let show_magicians = (magicians: string[]) => {
    for (let magician of magicians) {
        console.log(magician)
    }
}
let magicians = ["Ahtisham", "Awais", "Husnain", "Usman"]

show_magicians(magicians)

export default magicians
export {show_magicians}