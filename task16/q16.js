// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guests = ["sattar", "ghaffar", "mkhan", "majid"];
guests.unshift("dawood");
console.log(guests);
guests.splice(2, 0, "waqar");
console.log(guests);
guests.push("salman");
console.log(guests);
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ",would you like to join me for a dinnar"));
});
