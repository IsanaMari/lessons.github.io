// var first = document.getElementById('first');
// var today;
//
// function startFunction() {
//   var a = first.appendChild(document.createElement('p'));
//   a.innerHTML = today = new Date().toLocaleTimeString();
// }
// var i = setInterval(startFunction, 1000);
// setTimeout(function () {
//   clearInterval(i);
// }, 100000);

/*second*/

var typeMessage = (function (velocity) {
  let container = document.getElementById("demo") ?
    document.getElementById("demo") :
    document.body.appendChild(
      document.createElement("h3")
    );
  container.style = `color: magenta;`;
  var index = 0;
  return function (message) {
    console.log(`function[${velocity}]`)
  }
})(1);

typeMessage(`Welcome to the hell`);