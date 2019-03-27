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
        attrs:{
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
        attrs:{
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
        attrs:{
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
        attrs:{
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
    function insertElement(tag, index, arr) {
        var el = index.appendChild(document.createElement(collection.name));
        console.log(el)
        el.num = tag;
        return el
    }
);
el [0] = insertElement(0, document.body)
for (var x = 1; x < 5; x++) {
    el [x] = insertElement(x, el [x - 1])
}
// console.log(a);
// var elemData = {
//     name: "div"
// }
//
// function insertElement(elemNum, parentElem) {
//     var elem = parentElem.appendChild(
//         document.createElement(elemData.name)
//     )
//     elem.num = elemNum
//     return elem
// }
//
// var elems = []
// elems [0] = insertElement(0, document.body)
// for (var x = 1; x < 5; x++) {
//     elems [x] = insertElement(x, elems [x - 1])
// }