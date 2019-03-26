function imageAppear() {
  var first = document.getElementById('first');
  var p = first.appendChild(document.createElement('p'));
  p.innerText = 'Click me';
  p.addEventListener('click', function (event) {
    var img = first.appendChild(document.createElement('img'));
    img.setAttribute('src', 'https://picsum.photos/200/200/?random');
    img.style = `
            height: 100px;
            width: 100px;
        `;
    img.addEventListener('mouseover', function (event) {
      img.style = `
            transition: all 1s;
            height: 200px;
            width: 200px;
        `
    });
    img.addEventListener('click', function (event) {
      img.remove();
    })
  });

}

imageAppear();

/*Second*/
var collection = ['main', 'div', 'p', 'span'];
var second = document.getElementById('second');

// function over ( event ) {
// ...
// }
// function out ( event ) {
// ...
// }
// function clickHandler ( event ) {
// ...
// }
var a = {};
["first", "second", "third", "fourth"].forEach(
  function (tag, index, arr) {
    // console.log(a[tag] = collection[index]);
    // var b = second.appendChild(document.createElement(collection[index]))
    // b.appendChild(document.createElement(collection[index + 1]))
    // second.appendChild(document.createElement(collection[index]))
    console.log(second.appendChild(document.createElement(collection[index + 1]))).appendChild(document.createElement(collection[index]))
  }
);
console.log(a);