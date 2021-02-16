function router(node) {

    this.node = node;
}


router.prototype.start = function start() {

    this.render();
    // Lol. It wasnt passing this lol very cool I love javascritp lol :)
    window.addEventListener('hashchange', this.render.bind(this));

}

router.prototype.activeRoute = function activeRoute() {
    let returnRoute = window.location.hash

    return returnRoute.slice(1);
}

router.prototype.render = function render() {
    console.log("Render called");
    console.log(this.node);
    // this.node.innerHTML = ""
    
  
    // let inputP = document.createElement('p');
    // inputP.innerHTML = this.activeRoute();

    // this.node.appendChild(inputP);



}


module.exports = router;