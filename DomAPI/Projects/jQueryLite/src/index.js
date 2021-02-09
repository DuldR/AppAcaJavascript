const nodeCollection = require('./dom_node_collection.js');

document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpack working");


    window.$l = (e) => {
        let returnArr = []
        let nodeList = document.querySelectorAll(e);
        // let testNode = document.querySelector("div");

        nodeList.forEach((el) => {
            returnArr.push(el);
        })

        // These return true and print.
        // console.log(testNode instanceof HTMLElement);
        // console.log(testNode.innerText);

        // This return an element

        return new nodeCollection(returnArr);
    }
})