const Inbox = require('./inbox.js');
const Compose = require('./compose.js');
const Sent = require('./sent.js');
const Router = require('./router.js');


document.addEventListener("DOMContentLoaded", () => {

    console.log("Webpack work");

    let routes = {
        inbox: Inbox,
        sent: Sent,
        compose: Compose,
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