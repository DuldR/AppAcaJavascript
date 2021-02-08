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
    // console.log("");
    this.html("");
}

module.exports = DOMNodeCollection;