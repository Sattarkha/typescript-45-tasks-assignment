
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


let Magicians:string[]=["Alice","David","Charis"]

function make_great(Magicians:string[]):string[]{
    let greatMagicians = []
    Magicians.forEach((magician)=>{
        greatMagicians.push(`${magician} the Great`)
    })
    return greatMagicians
}

function show_magicians(Magicians:string[]){
    Magicians.forEach((magician)=>{
        console.log(magician)
    })
}

let greatMagicians = make_great(Magicians.slice())
console.log("Original magician");
show_magicians(Magicians)
console.log("the great magicians")
show_magicians(greatMagicians)