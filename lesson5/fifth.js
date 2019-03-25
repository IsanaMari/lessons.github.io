function sampleFunc() {
  console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}
var figure = { name: "figure" };
var sample = { name: "sample" };

function modificator(message) {
  // console.log ( `${this}: ${figure.name} | ${sample.name}` )
}
testFunc = modificator(sampleFunc);

// testFunc();