// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// function Magicians(...arr:string[]){
//       return arr.map((name)=>{
//             console.log(name)
//       })
// }
// console.log(Magicians("david","ali","simon"))
var magicians = ["david", "ali", "simon"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);