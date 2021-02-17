const Inbox = require('./inbox.js');
const Router = require('./router.js');


document.addEventListener("DOMContentLoaded", () => {

    console.log("Webpack work");

    let routes = {
        inbox: Inbox,
    }

    let inputContent = document.querySelector('.content');
    let sidebarNodes = document.querySelectorAll('.sidebar-nav li');


    sidebarNodes.forEach((node) => {
        node.addEventListener('click', function() {

            // This was setting it to the function :)
            window.location.hash = node.innerText.toLowerCase();

        })
    })

    let route = new Router(inputContent, routes);
    route.start();



})