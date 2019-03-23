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
            transition: all .8s;
            height: 200px;
            width: 200px;
        `
        });
        img.addEventListener('click',function (event) {
            img.style.display = 'none';
        })
    });

}
imageAppear();