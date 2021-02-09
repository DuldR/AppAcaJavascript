class DOMNodeCollection {

    constructor (arr) {
        this.collection = arr;
    }
}

DOMNodeCollection.prototype.html = function html(string) {

    let inputStr = string || null


    if (inputStr !== null) {
        this.collection.forEach((el) => {
            el.innerHTML = inputStr;
        })
    } else {
        // IMplicit return :)
        console.log(this.collection[0].innerHTML)
        this.collection[0].innerHTML;
    }
}

DOMNodeCollection.prototype.empty = function empty() {
    this.html(" ");
}

DOMNodeCollection.prototype.append = function append(ele) {
    // Test single

    console.log(ele instanceof HTMLElement);
    // This works for string
    if ('string' === typeof(ele)) {
        this.collection.forEach((el) => {
            el.innerHTML = el.innerHTML + ele;
        })
    } else if (ele instanceof HTMLElement) {
        // This achieves what append does.
        this.collection.forEach((el) => {
            let clonedNode = ele.cloneNode(true);
            el.appendChild(clonedNode);
        })

        ele.remove();
    }
}

module.exports = DOMNodeCollection;