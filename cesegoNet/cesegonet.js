window.onload = function() {
    canv = document.getElementById("naive");
    ctx = canv.getContext("2d");

    // Background Image
    let background = new Image();
    background.src = "./styles/static/empty.png";
    background.onload = function() {
        ctx.drawImage(background, 0, 0);
        game();   
    }
}

function game() {
    ctx.font = "100 21px 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Krakow", 375, 250);
}