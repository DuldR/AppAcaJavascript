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

    return this.routes[window.location.hash.slice(1)];
}

router.prototype.render = function render() {

    this.node.innerHTML = ""
    let component = this.activeRoute();
  

    if (component === undefined) {
        return
    } else {
        console.log(component);
        console.log(component.render())
        this.node.appendChild(component.render());
    }
}


module.exports = router;