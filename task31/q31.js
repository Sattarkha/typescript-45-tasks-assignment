// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ["Ali", "Ayesha", "Admin", "Syeda"];
usernames = [];
if (usernames.length == 0) {
    console.log(" We need to find some users!");
}
else {
    usernames.forEach(function (username) {
        if (username == "admin") {
            console.log("hello ".concat(username, ",would you like to see a status report"));
        }
        else {
            console.log("hello ".concat(username, ",thanks for logging "));
        }
    });
}