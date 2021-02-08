document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpack working");

    window.$l = (e) => {
        let returnArr = []
        let nodeList = document.querySelectorAll(e);

        nodeList.forEach((el) => {
            returnArr.push(el);
        })

        return returnArr;
    }
})