document.addEventListener("DOMContentLoaded", function(){

    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(130, 360, 40, 60)

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 100;


    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = "green";
    ctx.fill();
});


