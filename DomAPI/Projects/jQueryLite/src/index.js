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

    window.$l.ajax = function (options = {}) {

        let defaults = {
            method: 'GET',
            URL: window.location.href,
            success: function succ(obj) {
                console.log(JSON.parse(obj));
            },
            error: function err() {
                console.log('Error!');
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
        }

        options = this.extend(defaults, options)
    
        // console.log(options.method);
        // console.log(options.URL);

        // THIS SHIT WORKS.
        const xhr = new XMLHttpRequest();
        xhr.open(options.method, options.URL);
        
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.status !== 200) {
                options.error();
            } else {
                options.success(xhr.response);
            }
        }
        xhr.send();
    }

    // This servus up a HTMLDocument error.
    // window.$l.prototype.take = () => {
    //     alert("balls");
    // }
})