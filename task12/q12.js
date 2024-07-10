// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var namesarray = ["sattar", "ghaffar", "mkhan", "majid"];
for (var _i = 0, namesarray_1 = namesarray; _i < namesarray_1.length; _i++) {
    var name_1 = namesarray_1[_i];
    console.log("hello ".concat(name_1, ", would you like to learn some python today?"));
}
