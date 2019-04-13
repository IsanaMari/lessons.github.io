var bag = {
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
function LibraryBook(_title = 'Some interesting book', _year = 'No info', _author = 'No info') {
    var title = _title;
    var year = _year;
    var author = _author;
    var readerName = null;
    var readerData = null;
    var giveTheBook = function (client, data = new Date().toLocaleString()) {
        readerName = client;
        readerData = data
    };
    this.getBookInfo = function () {
        var text = readerName ? 'Already taken' : 'You can take it';
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

var book = new LibraryBook('World of Warcraft', '2016', 'William King');
book.getTheBook('John Doe', new Date(2018, 6, 25));

// third
function Constr() {
    Constr.prototype.addProperty = function (name, val) {
        this[name] = val
    }
}

var test = new Constr();
test.addProperty('fruit', 'strawberry');