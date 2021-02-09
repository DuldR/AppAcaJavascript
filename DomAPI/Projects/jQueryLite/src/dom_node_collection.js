class DOMNodeCollection {

    constructor (arr) {
        this.collection = arr;
    }
}

DOMNodeCollection.prototype.html = function html(string) {

    if (string !== null || string === "") {
        this.collection.forEach((el) => {
            el.innerHTML = string;
        })
    } else {
        // IMplicit return :)
        this.collection[0].innerHTML;
    }
}

DOMNodeCollection.prototype.empty = function empty() {
    this.html("");
}

DOMNodeCollection.prototype.append = function append(ele) {
    // Test single

    // This works for strings
    this.collection.forEach((el) => {
        el.innerHTML = el.innerHTML + ele;
    })
}

module.exports = DOMNodeCollection;