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
handler = () => {
  console.log(messages[1])
};
messages.forEach(
  message => sendMessage(message, handler)
);

getKey = () => {
  var key = new Date().toLocaleString().split(", ")[1];
  return log [key] ? key + "[2]" : key
};