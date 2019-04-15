let bag = {
    cosmeticBag: 'blue',
    hairbrush: 'red',
    password: 1,
    cookies: 10,
    addItem(item, val) {
        this[item] = val
    },
    removeItem(item) {
        delete this[item]
    }
};

// second

function LibraryBook(title, year, author) {
    let title = title,
        year = year,
        author = author,
        readerName = '',
        readerData = '';
    let giveTheBook = function (client, data = new Date().toLocaleString()) {
        readerName = client;
        readerData = data
    };
    this.getBookInfo = function () {
        let text = readerName ? null : 'Take it';
        console.info(`${author}, ${title} (${year}): ${text}`)
    };
    this.getTheBook = function (client, data) {
        if (readerName) {
            this.getBookInfo();
            return null
        } else {
            giveTheBook(client, data);
            return {
                title: title,
                year: year,
                author: author
            }
        }
    };
    this.returnBook = function () {
        readerName = null;
        readerData = null
    }
}

let book = new LibraryBook();
book.getTheBook('Bridge to Terabithia', new Date(2019, 1, 1));


// third
function Constr() {
    Constr.prototype.addProperty = function (name, val) {
        this[name] = val
    }
}

var test = new Constr();
test.addProperty('fruit', 'strawberry');

//////////////
