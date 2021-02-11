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
    // This returns true
    console.log(ele instanceof DOMNodeCollection);
    // console.log(ele instanceof HTMLElement);
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
    } else if (ele instanceof DOMNodeCollection) {
        // This also accomplishes jquery append.
        ele.collection.forEach((el) => {
            this.collection[0].appendChild(el);
        })

    }

    // More is needed. If the the this collection is a collection and the appendee is a collection, jqeury uses the first element from the appendee and appends that to the this collection

}

DOMNodeCollection.prototype.attr = function attr(ele, set) {
    // return this.collection[0].attributes.getNamedItem(ele).value
    if (set === undefined) {
        return this.collection[0].getAttribute(ele);
    } else {
        this.collection[0].setAttribute(ele, set);
    }
}

DOMNodeCollection.prototype.addClass = function addClass(el) {


    this.collection.forEach((ele) => {
        ele.classList.add(el);
    })
}

DOMNodeCollection.prototype.removeClass = function removeClass(el) {

    this.collection.forEach((ele) => {
        ele.classList.remove(el);
    })

}

DOMNodeCollection.prototype.children = function children(selector) {
    let returnArr = [];

    // Use an if to modify the selector lol.
    // If its a class or id method
    if (selector !== undefined) {
        if (selector[0] === '.' || selector[0] === '#') {
            selector = selector.slice(1);
        }
    }

    console.log(selector);
    this.collection.forEach((el) => {


        for (i=0; i < el.children.length; i++) {
            if (el.children[i].classList.contains(selector)) {
                returnArr.push(el.children[i]);
            }
        }
    })

    return new DOMNodeCollection(returnArr);
}

module.exports = DOMNodeCollection;