function router(node, routes) {

    this.node = node;
    this.routes = routes;
}


router.prototype.start = function start() {

    this.render();
    // Lol. It wasnt passing this lol very cool I love javascritp lol :)
    window.addEventListener('hashchange', this.render.bind(this));

}

router.prototype.activeRoute = function activeRoute() {

    return this.routes[window.location.hash.slice(1)].render();
}

router.prototype.render = function render() {

    this.node.innerHTML = ""

    let component = this.activeRoute();
  
    let inputP = document.createElement('p');
    inputP.innerHTML = this.activeRoute();

    this.node.appendChild(inputP);



}


module.exports = router;