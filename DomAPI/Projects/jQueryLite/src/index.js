const nodeCollection = require('./dom_node_collection.js');

document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpack working");
    

    window.$l = (e) => {
        let returnArr = []
        let nodeList = document.querySelectorAll(e);
        let testNode = document.querySelector("div");

        // nodeList.forEach((el) => {
        //     console.log(e instanceof Node);
        //     // returnArr.push(el);
        // })

        console.log(testNode instanceof HTMLElement);
        console.log(testNode.innerText);

        return returnArr;
    }
})