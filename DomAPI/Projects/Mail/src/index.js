document.addEventListener("DOMContentLoaded", () => {

    console.log("Webpack work");

    let innerText = "";
    let toLowerCase = "";
    let location = "";


    let sidebarNodes = document.querySelectorAll('.sidebar-nav li');

    sidebarNodes.forEach((node) => {
        node.addEventListener('click', function() {
            innerText = node.innerText;
            toLowerCase = innerText.toLowerCase;
            location = window.location.href;


            console.log(innerText);
            console.log(toLowerCase);
            console.log(location);
        })
    })


})