const user = {
    userName: "Kabir",
    age: 21,

    greetingmsg: function () {
        console.log(`Hi ${this.userName}, welcome to this website.`);
    }
}
// user.greetingmsg()
// user.userName = "Abhishek"
// user.greetingmsg()

console.log(this);