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

    // This works
    window.$l.extend = function (target, arg1, arg2) {
        return Object.assign(target, arg1, arg2);
    }

    // This servus up a HTMLDocument error.
    // window.$l.prototype.take = () => {
    //     alert("balls");
    // }
})