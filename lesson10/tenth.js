let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

var log = {};
var sendMessage = (message, callback) =>
    setTimeout(
        () => callback(message),
        Math.random() * 7000
    );
handler = message => {
    Object.assign(log,
        {[getKey()]: message}
    )
};
messages.forEach(
    message => sendMessage(message, handler)
);

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1];
    return log [key] ? key + "[2]" : key
};

//second
function User(name) {
    this.name = name;
    var presence = false;
    name !== null && presence == true ? console.log('Ivan is present') : console.log('Ivan is absent')
}

let user = new User("Ivan");
console.info(user.presence);