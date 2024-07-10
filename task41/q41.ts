// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// function Magicians(...arr:string[]){
//       return arr.map((name)=>{
//             console.log(name)
//       })
// }
// console.log(Magicians("david","ali","simon"))

let magicians:string []=["david","ali","simon"]
function show_magicians(magicians:string[]){
    magicians.forEach((magician)=>{
        console.log(magician)
    })
}
show_magicians(magicians)