const nodeCollection = require('./dom_node_collection.js');

document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpack working");


    window.$l = (e) => {

        let funcArr = []
        let returnArr = []

        function cycleFun() {
            funcArr.forEach((func) => {
                func();
            })
        }

        if (e instanceof Function) {
            funcArr.push(e);
            if (document.readyState === 'complete') {
                cycleFun();
            }
        } else {
            let nodeList = document.querySelectorAll(e);

            nodeList.forEach((el) => {
                returnArr.push(el);
            })

            return new nodeCollection(returnArr);
        }
    }

    window.$l.extend = function () {
        alert("l");
    }
})