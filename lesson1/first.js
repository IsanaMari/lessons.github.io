function num() {
  var numbers = [254, 115, 78, 25, 91, 45, 37];
  for (var i = 0; i < numbers.length; i++) {
    var sum = numbers[i];
    sum > 50 ? console.log(sum) : null
  }
}
num();