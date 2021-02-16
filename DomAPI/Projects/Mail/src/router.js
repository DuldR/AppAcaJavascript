function router(node) {

    this.node = node;
}


router.prototype.start = function start() {

    document.addEventListener('hashchange', this.render);

}

router.prototype.activeRoute = function start() {
    
}

router.prototype.render = function start() {
    alert('ALERRT HASH CHANGE');
}


module.exports = router;