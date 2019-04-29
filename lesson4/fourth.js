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

function LibraryBook(title = 'Some interesting book', year = 'No info', author = 'No info') {
    let title_ = title;
    let year_ = year;
    let author_ = author;
    let readerName = null;
    let readerData = null;
    let giveTheBook = function (client, data = new Date().toLocaleString()) {
        readerName = client;
        readerData = data
    };
    this.getBookInfo = function () {
        console.log(readerData)
    };
    this.getTheBook = function (client, data) {
        if (readerName) {
            this.getBookInfo();
            return null
        } else {
            giveTheBook(client, data);
            return {
                title: title_,
                year: year_,
                author: author_
            }
        }
    };
    this.returnBook = function () {
        readerName = null;
        readerData = null;
    }
}

let book = new LibraryBook('Bridge to Terabithia','1977','Katherine Paterson');
book.getTheBook('Bridge to Terabithia', new Date(2019, 1, 1));


// third
function OwnConstructor() {
    OwnConstructor.prototype.addProperty = function (name, val) {
        this[name] = val
    }
}

let test = new OwnConstructor();
test.addProperty('car', 'BMW');

