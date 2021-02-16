function router(node) {

    this.node = node;
}


router.prototype.start = function start() {

    window.addEventListener('hashchange', function() {
        alert("ALERT HASH CHANGE");
    });

}

router.prototype.activeRoute = function activeRoute() {
    
}

router.prototype.render = function render() {
    alert('ALERRT HASH CHANGE');
}


module.exports = router;