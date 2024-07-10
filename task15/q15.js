// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
var guests = ["sattar", "ghaffar", "mkhan", "majid"];
guests.forEach(function (Guest) {
    console.log("hello dear ".concat(Guest, ",would you like to join me for dinnar"));
});
// one guest is not able to attend so it has been replaced by another guest
guests.splice(2, 1, "asghar");
console.log(guests);
// new invitation
guests.forEach(function (Guest) {
    console.log("hello dear ".concat(Guest, ",would you like to join me for dinnar"));
});
