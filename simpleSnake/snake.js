window.onload = function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}
pause = false;
previousState = "right";
oneFrameLater = true;
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = 1;
yv = 0;
trail = [];
tail = 5;
score = 0;
highScore = localStorage.getItem("highScore") === null ? 0 : localStorage.getItem("highScore")
function game() {
    document.getElementById("highScore").innerHTML = "High Score: " + highScore + "<br />";
    document.getElementById("score").innerHTML = "Score: "+ score + "<br />";
    oneFrameLater = true;
    if(!pause) {
        px += xv;
        py += yv;      
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
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for(var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x == px && trail[i].y == py && !pause) {
            tail = 5;
            if(score > highScore) {
                highScore = score;
                score = 0;
            }
            else score = 0;
            localStorage.setItem("score", score);
            localStorage.setItem("highScore", highScore)
        }
    }
    if(!pause)
        trail.push({x:px, y:py});
    while(trail.length > tail && !pause) {
        trail.shift();
    }
    if(ax == px && ay == py && !pause) {
        score++;
        tail++;
        valid = true;
        ax = Math.floor(Math.random()*tc);
        ay = Math.floor(Math.random()*tc);
        valid = true
        while(valid)
            valid = false
            for(var i = 0; i < trail.length; i++) {
                if(trail[i].x == ax && trail[i].y == ay) {
                    ax = Math.floor(Math.random()*tc);
                    ay = Math.floor(Math.random()*tc);
                    valid = true
                    break;
                }
            }
    }

    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

    if(pause) {
        // Create gradient
        var grd = ctx.createRadialGradient(200, 200, 5, 200, 200, 200);
        grd.addColorStop(0, "#663c00");
        grd.addColorStop(1, "black");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 190, 400, 20);

        ctx.font = "12px Courier New";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("P A U S E D", 200, 205);
    }
}
function keyPush(evt) {
    if(oneFrameLater)
        switch(evt.keyCode) {
            case 32:    // Pause
                oneFrameLater = false;
                pause = !pause;
                break;
            case 37:    // Left
                if(!pause && previousState != "right") {
                    oneFrameLater = false;
                    xv = -1; yv = 0;
                    previousState = "left";
                }
                break;
            case 38:    // Down
                if(!pause && previousState != "up") {
                    oneFrameLater = false;
                    xv = 0; yv = -1;
                    previousState = "down";
                }
                break;
            case 39:    // Right
                if(!pause && previousState != "left") {
                    oneFrameLater = false;
                    xv = 1; yv = 0;
                    previousState = "right";
                }
                break;
            case 40:    // Up
                if(!pause && previousState != "down") {
                    oneFrameLater = false;
                    xv = 0; yv = 1;
                    previousState = "up";
                }
                break;
        }
}