// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.


function make_shirt(size:string="large",text:string="I love typescript"){
    console.log(`the size of shirt is ${size} of ${text}`)
}

make_shirt(); //default large and message
make_shirt("medium") // medium size with default msg
make_shirt("SMALL","DIVE INTO CODING"); //custom message ,small size