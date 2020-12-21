document.addEventListener("DOMContentLoaded", function(){

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    // Need to draw moving object here.
    // How to fill in the window? May need webpack
    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    

});