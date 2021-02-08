class DOMNodeCollection {

    constructor (arr) {
        this.collection = arr;
    }
}

DOMNodeCollection.prototype.html = function html(string) {
    let inputStr = string || null;

    if (inputStr !== null) {
        this.collection.each((el) => {
            el.innerHTML = inputSr;
        })
    } else {
        console.log(this.collection[0].innerHTML);
    }
}

module.exports = DOMNodeCollection;