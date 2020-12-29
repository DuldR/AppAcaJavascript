const Utils = {
    inherits: function inherits(childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },

    randomVec: function randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Utils.scale([Math.sin(deg), Math.cos(deg)], length);
    },

    scale: function scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

    dist: function dist(pos1, pos2) {
        return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)
    },

    // Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

    norm: function norm(pos) {
        return this.dist([0,0], [pos[0], pos[1]]);
    }
}

// console.log(Utils.norm([2,0]));
console.log(Utils.randomVec(2));


module.exports = Utils;