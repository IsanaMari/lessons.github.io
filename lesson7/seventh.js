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
var collection = [
  {
    name: 'div',
    attrs: {
      title: 'container',
      style: `
                background-color: #ff0066;
                border: dotted 2px #ff0000;
                border-radius: 50%;
            `
    }
  },
  {
    name: 'p',
    attrs: {
      title: 'container',
      style: `
                background-color: #ff0066;
                border: dotted 2px #ff0000;
                border-radius: 50%;
            `
    }
  },
  {
    name: 'span',
    attrs: {
      title: 'container',
      style: `
                background-color: #ff0066;
                border: dotted 2px #ff0000;
                border-radius: 50%;
            `
    }
  },
  {
    name: 'a',
    attrs: {
      title: 'container',
      style: `
                background-color: #ff0066;
                border: dotted 2px #ff0000;
                border-radius: 50%;
            `
    }
  }
];
var second = document.getElementById('second');
//
// function over ( event ) {
// ...
// }
// function out ( event ) {
// ...
// }
// function clickHandler ( event ) {
// ...
// }
var el = [];
["first", "second", "third", "fourth"].forEach(
  function (tag, index, arr) {
    let j = document.getElementsByTagName('body')[0];
    for (let ind = 0; ind < index; ind++) {
      j = j.firstChild
    }
    j.prepend(document.createElement(collection[index].name));
    j = document.getElementsByTagName('body')[0];
  }
)