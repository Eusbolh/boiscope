window.onload = function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}
pause = false;
previousState = "right"; 
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = 1;
yv = 0;
trail = [];
tail = 5;
function game() {
    if(!pause) {
        px += xv;
        py += yv;
    }
    if(px < 0) {
        px = tc-1;
    }
    if(px > tc-1) {
        px = 0;
    }
    if(py < 0) {
        py = tc-1;
    }
    if(py > tc-1) {
        py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for(var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x == px && trail[i].y == py) {
            tail = 5;
            setTimeout(function(){}, 2000);
        }
    }
    if(!pause)
        trail.push({x:px, y:py});
    while(trail.length > tail && !pause) {
        trail.shift();
    }
    if(ax == px && ay == py) {
        tail++;
        valid = true;
        ax = Math.floor(Math.random()*tc);
        ay = Math.floor(Math.random()*tc);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 32:    // Pause
            pause = !pause;
            break;
        case 37:    // Left
            if(!pause && previousState != "right") {
               xv = -1; yv = 0;
               previousState = "left";
            }
            break;
        case 38:    // Down
            if(!pause && previousState != "up") {
                xv = 0; yv = -1;
                previousState = "down";
            }
            break;
        case 39:    // Right
            if(!pause && previousState != "left") {
                xv = 1; yv = 0;
                previousState = "right";
            }
            break;
        case 40:    // Up
            if(!pause && previousState != "down") {
                xv = 0; yv = 1;
                previousState = "up";
            }
            break;
    }
}