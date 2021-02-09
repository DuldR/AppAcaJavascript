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
    console.log(this.collection[0].outerHTML);
    console.log(this.collection[0].nodeType);

    // test variable
    console.log(ele.collection[0].nodeType);

    let inputNode = ele.collection[0].cloneNode(true);

    this.collection[0].appendChild(inputNode);
}

module.exports = DOMNodeCollection;