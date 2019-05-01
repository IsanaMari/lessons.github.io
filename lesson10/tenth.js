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
  Object.defineProperty(this, "presence", {
    get: () =>
      presence ? `${this.name} is present` : `${this.name} is absent`,
    set: value =>
      presence = value
  })
}

let user = new User("Ivan");
console.info(user.presence);
user.presence = '+';
console.info(user.presence);

// third
