function imageAppear() {
  let first = document.getElementById("first") ?
    document.getElementById("first") :
    document.body.appendChild(
      document.createElement("h3")
    );
  var p = first.appendChild(document.createElement('p'));
  p.innerText = 'Click me';
  p.style = `
    border: 1px solid #ff0000;
    width: 100px;
    cursor: pointer;
  `;
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
var collection = [];

function over(event) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out(event) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler(event) {
    event.target.remove()
}
let second = document.getElementById("second") ?
  document.getElementById("second") :
  document.body.appendChild(
    document.createElement("h3")
  );
["first", "second", "third", "fourth"].forEach(
    function (tag, index, arr) {

        var x = (index ? collection[index - 1] : second).appendChild(
            document.createElement('div')
        );
        collection.push(x);
        x.style = `
      width: ${400 - index * 50}px;
      height: ${400 - index * 50}px;
      background-color: #ff00ff50;
      border: dotted 1px yellow;
    `;
        x.title = tag;
        x.onmouseover = over;
        x.onmouseout = out;
        x.onclick = clickHandler
    }
);

/*third*/
// var elementsCollection = [];
//
// function mouseOver(event) {
//   event.target.style.backgroundColor = '#ffff0050'
// }
// function mouseOut(event) {
//   event.target.style.backgroundColor = '#ff00ff50'
// }
// function clickHandlerEvent(event) {
//   event.target.innerHTML = '';
// }
// let third = document.getElementById("third") ?
//   document.getElementById("third") :
//   document.body.appendChild(
//     document.createElement("h3")
//   );
// [1, 2, 3, 4, 5, 6, 7].forEach(
//   function (tag, index, arr) {
//
//     var x = (index ? elementsCollection[index - 1] : third).appendChild(
//       document.createElement('div')
//     );
//     elementsCollection.push(x);
//     x.style = `
//       width: ${400 - index * 50}px;
//       height: ${400 - index * 50}px;
//       background-color: #ff00ff50;
//       border: dotted 1px yellow;
//     `;
//     x.title = tag;
//     x.onmouseover = mouseOver;
//     x.onmouseout = mouseOut;
//     x.onclick = clickHandlerEvent
//   }
// );