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
var elemData = {
    name: "div",
    attrs: {
        className: "container",
        title: ['first', 'second', 'third', 'fourth'],
        style: `
            top: 20px;
            left: 20px;
            border: dotted 1px yellow;
            background-color:#ff00ff50;
        `
    }
}

function addElement(elemNum, parentElem) {
    let elem = parentElem.appendChild(
        document.createElement(elemData.name)
    );
    elem.num = elemNum;

    for (let attr in elemData.attrs)
        elem [attr] = elemData.attrs [attr];
    elem.title = elemData.attrs.title[elemNum];
    elem.style.width = `${400 - elemNum * 50}px`;
    elem.style.height = `${400 - elemNum * 50}px`;
    elem.addEventListener('mouseover', enter);
    elem.addEventListener('mouseout', leave);
    elem.addEventListener('click', clickHandlerFunction);

    return elem
}

let collectionElements = [];
collectionElements [0] = addElement(0, document.body);
elemData.attrs.title.forEach(
    function (tag, index) {
        index === 0 ? null :
            collectionElements.push(
                addElement(index, collectionElements [index - 1])
            )
    }
);

function enter(event) {
    event.target.style.backgroundColor = '#ffff0050'
}

function leave(event) {
    event.target.style.backgroundColor = '#ff00ff50'
}

function clickHandlerFunction(event) {
    event.target.children.length ?
        event.target.parentNode.appendChild(
            event.target.children[0]) : null;
    event.target.remove()
}