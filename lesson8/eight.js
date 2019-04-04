let first = document.getElementById("first") ?
  document.getElementById("first") :
  document.body.appendChild(
    document.createElement("h3")
  );
var today;

function startFunction() {
  var a = first.appendChild(document.createElement('p'));
  a.innerHTML = today = new Date().toLocaleTimeString();
}
var i = setInterval(startFunction, 1000);
setTimeout(function () {
  clearInterval(i);
}, 100000);

/*second*/

var typeMessage = (function (velocity) {
  let container = document.getElementById("second") ?
    document.getElementById("second") :
    document.body.appendChild(
      document.createElement("h3")
    );
  container.style = `color: magenta;`;
  var index = 0;
  return function (message) {
    var num = index;
    setTimeout(
      () => container.textContent += message [num],
      1000 * velocity * num
    );
    index++ < message.length - 1 ? arguments.callee(message) : null
  }
})(1);

typeMessage(`Welcome to the hell`);

/*third*/

function User(name) {
  this.name = name;
  this.id = this.counter()
}
User.prototype.counter = (function () {
  var counter = 0;
  return function () {
    return this.id ? this.id : counter++
  }
})();

var users = [
  new User("Семен"),
  new User("Антон"),
  new User("Демьян"),
  new User("Василий")
]