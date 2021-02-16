const Router = require('./router.js');


document.addEventListener("DOMContentLoaded", () => {

    console.log("Webpack work");



    let sidebarNodes = document.querySelectorAll('.sidebar-nav li');

    sidebarNodes.forEach((node) => {
        node.addEventListener('click', function() {

            window.location.hash = node.innerText.toLowerCase;

        })
    })

    let newRouter = new Router(sidebarNodes[0]);

    console.log(newRouter.node);


})