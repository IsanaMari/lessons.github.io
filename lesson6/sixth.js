var tags = ['a', 'p', 'div', 'span'];

var classes = ['link', 'paragraph', 'block', 'icon'];
var css = document.head.appendChild(document.createElement('style'));
css.type = 'text/css';
for (var el in classes) {
  var styles;
  styles += ` .${classes[el]} {background: #ff0000; height: 50px; width:50px; display: block; margin-bottom: 10px}`;
}
for(var arr in tags){
  var elements = document.body.appendChild(document.createElement(tags[arr]));
  elements.setAttribute('class',`${classes[arr]}`)
}
css.styleSheet ? css.styleSheet.cssText = styles : css.appendChild(document.createTextNode(styles));