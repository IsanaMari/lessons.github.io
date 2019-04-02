/*First*/
function typeMessage(message, velocity) {
  var container = document.getElementById("first") ?
    document.getElementById("first") :
    document.body.appendChild(
      document.createElement("h3")
    );
  container.style = `color: magenta`;
  message.split('').forEach(
    (item, index) => setTimeout(
      () => container.textContent += item,
      1000 * index * velocity
    )
  )
}

typeMessage(`Welcome to the hell`, 1);

/*Second*/
var users = (function (list) {
  var users = [];
  for (var user of list)
    users.push({
      name: user,
      present: false
    })

  return {
    setUserPresent (userName, present) {
      let user = users.find(
        item => item.name === userName
      );
      user ? user.present = present : null
    },
    showPresent () {
      console.log(
        users.filter(
          item => item.present
        )
      )

    },
    showAbsent () {
      console.log(
        users.filter(
          item => !item.present
        )
      )
    }
  }
})(["Иван", "Дмитрий", "Степан", "Михаил"]);

/*Third*/
let changeClass = (classname, styleString) => ( Array.from(document.styleSheets)
    .filter(sheet => !sheet.href)
    .map(
      sheet => Array.from(sheet.cssRules)
        .filter(rule => rule.selectorText === `.{classname}`)
    )
    .filter(item => item.length > 0)
    .map(item => item[0].cssText.split("}")
      .join(`${styleString}}`)
    )
).length > 0 ? console.log("found") :
  document.head.appendChild(
    document.createElement("style")
  ).textContent = `.${classname} {${styleString}}`;

changeClass("second-level-menu", "background-color: red!important;");
