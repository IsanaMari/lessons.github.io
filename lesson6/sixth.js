function first() {
  var first_task = document.getElementById('first');
  var tags = ['ul', 'em', 'h1', 'table'];

  var classes = ['link', 'paragraph', 'block', 'icon'];
  var css = document.head.appendChild(document.createElement('style'));
  css.type = 'text/css';
  var styles = '';
  for (var el in classes) {
    styles += ` .${classes[el]} {background: #ff0000; height: 50px; width:50px; display: block; margin-bottom: 10px}`;
  }
  for (var arr in tags) {
    var elements = first_task.appendChild(document.createElement(tags[arr]));
    elements.setAttribute('class', `${classes[arr]}`)
  }
  css.styleSheet ? css.styleSheet.cssText = styles : css.appendChild(document.createTextNode(styles));
}

first();

/*Second*/

function second() {
  var second_task = document.getElementById('second');
  var tags = [
    {
      tag: 'a',
      class: 'button',
      attribute: 'href',
      value: '#',
      content: 'Link',
      style: 'height: 50px; width: 50px; background-color: #ff5500; display:block; margin-bottom:10px;',
      eventValue: 'click'
    },
    {
      tag: 'p',
      class: 'text',
      attribute: 'align',
      value: 'left',
      content: 'paragraph',
      style: 'height: 50px; width: 50px; background-color: #00ff00; display:block; margin-bottom:10px;',
      eventValue: 'mouseover'
    },
    {
      tag: 'div',
      class: 'box',
      attribute: 'title',
      value: 'text',
      content: 'div',
      style: 'height: 50px; width: 50px; background-color: #0000ff; display:block; margin-bottom:10px;',
      eventValue: 'mouseout'
    },
    {
      tag: 'span',
      class: 'price',
      attribute: 'accesskey',
      value: 'x',
      content: 'span',
      style: 'height: 50px; width: 50px; background-color: #ff0000; display:block; margin-bottom:10px;',
      eventValue: 'mouseover'
    }
  ];
  // console.log(tags[0].func())
  var css = document.head.appendChild(document.createElement('style'));
  css.type = 'text/css';
  var element = '';
  var styles = '';
  var classes = '';


  for (x in tags) {
    element = tags[x].tag;
    classes = tags[x].class;
    var elements = second_task.appendChild(document.createElement(element));
    elements.setAttribute('class', `${classes}`);
    elements.setAttribute(`${tags[x].attribute}`, `${tags[x].value}`);
    elements.innerHTML += `${tags[x].content}`;
    elements.addEventListener(`${tags[x].eventValue}`, function (event) {
      this.style = `background: #880011`
    });
    styles += ` .${tags[x].class} {${tags[x].style}}`;
  }
  css.styleSheet ? css.styleSheet.cssText = styles : css.appendChild(document.createTextNode(styles));

}

second();

/*Third*/
function addBackColor() {
  var elems = document.body.getElementsByTagName("*");
  for (x in elems) {
    var newElem = elems[x];
    console.log(newElem);
    newElem.tagName !== 'SCRIPT' ? newElem.classList += ' redBack' : null;
  }
}

