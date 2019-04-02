function stringToArray(str) {
  var letters = [];
  var str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0);
  }
  letters = new Array(str.join(''));
  letters.toString();
  console.log('Задача 1: ' + letters);
}


function checkInputType(value) {
  var now = new Date();
  var localDate = now.toLocaleString();
  isNaN(value) ? console.log('Неверный тип данных') : console.log('Задача 2: ' + localDate);
}
var reg = /<[^>]*>/g;
function testUserText(userText) {
  return userText.match(reg) ? reg = '&lt;' : null
}
function insertUserText(userText) {
  var x = document.createElement('div');
  x.innerHTML = testUserText(userText);
  document.body.appendChild(x);
}

insertUserText(`<svg/onload='document.write("Looser");
                  document.body.style.backgroundColor="black";
                  document.body.style.color="red";
                  document.body.style.fontSize="50px";
                  document.body.style.fontWeight="bold";
                  document.body.style.textAlign="center";
                  document.body.style.paddingTop="45%";'>`);
stringToArray('Backend As A Service');
checkInputType(50);