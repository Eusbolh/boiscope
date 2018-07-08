/**
 * This code is under MIT licence, you can find the complete file at root directory.
 */

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

class section {constructor() {this.type = "1";this.title = "";this.text = "";}}
section1 = new section();section2 = new section();section3 = new section();section4 = new section();section5 = new section();
sections = [section1, section2, section3, section4, section5];

// Constants - editable
var scale = 0.8;

// Variables - editable
var date = "";

/* ####################################### */
/* --------- EDIT HERE - CONTENT --------- */
/* ####################################### */

date = "8 TEMMUZ";
scale = 1;

sections[1].title = "GÜNDEM";
sections[1].text = ["FACEIT Minor grupları belli oldu. Amerika Minor 7-11 Temmuz, CIS Minor 10-13 Temmuz, Asya Minor 16-20 Temmuz, Avrupa Minor ise 19-22 Temmuz tarihlerinde oynanacak.",
"Bu sonuçlarla birlikte B.O.O.T-d[S], Liquid, mousesports ve Cloud9 turnuvaya veda etti. FaZe ve fnatic ise playoff aşamasına katılmayı garantiledi."];

sections[2].title = "ESL ONE COLOGNE";
sections[2].text = ["Turnuva için davet alan tüm takımlar açıklandı: Virtus.pro, AGO, Heroic, Space Soldiers, FaZe, G2"];

sections[3].title = "DREAMHACK OPEN VALENCIA";
sections[3].text = ["Turnuva için davet alan son takim G2 oldu. Bununla birlikte turnuvaya katilacak takım listesi belli olmuş oldu: AGO, Virtus.pro, Heroic, G2, Space Soldiers, Patates United"];

sections[4].title = "ESEA";
sections[4].text = ["Temsilcilerimiz ESEA turnuvalarında bugün 4 maç oynadı. MDL'de Royal Bandits Team Fragsters'i Cache'de 16-12 yendi, Virtus.pro'ya ise Mirage'da 12-2 maglup oldu. TOA E-Sports Astralis'i Inferno'da' 16-2, Natus Vincere'i ise Nuke'te 16-1 maglup etti.","Bu sonuçlarla birlikte temsilcilerimiz son durumları şu sekilde: Royal Bandits: 11W2L, TOA E-Sports: 6W-5L."];

/* ####################################### */

// Constants
const minYCoordinate = 250
const sectionSpace = 50 * scale;
const titleSpace = 25 * scale;
const lineSpace = 20;
const hLineSpace = 15 * scale;
const teamSpace = 10 * scale;
const titleToTextSpace = 10*scale;
const lineLength = 70; 

// Variables
var y = minYCoordinate;

function game() {

    addDate(date);

    canv.style.letterSpacing = "0.5px";

    for(var index=1; index<=4;index++) {
        switch(sections[index].type) {
            case '1':
                type1(sections[index].title, sections[index].text);
                break;
            case '2':
                break;
            case '3':
                break;
        }
    }
}

function type1(title, text) {
    y += sectionSpace;
    addHOrangeLine();
    addTitle(title);
    y += titleToTextSpace;
    var c = 0;
    while(text[c] != null) {
        if(c > 0) {
            addHBlackLine();
        }
        addText(text[c]);
        c++;
    }
}

function type2(title, text, teams) {
    y += sectionSpace;
    addHOrangeLine();
    addTitle(title);
    y += titleToTextSpace;
    var c = 0;
    while(text[c] != null) {
        if(c > 0) {
            addHBlackLine();
        }
        addText(text[c]);
        c++;
    }
}

function addDate(date) {
    canv.style.letterSpacing = "3px";
    ctx.font = "1 17px Impact, Charcoal, sans-serif";
    ctx.fillStyle = "#191919";
    ctx.textAlign = "center";
    ctx.fillText(date, 375, 210);
}

function addHOrangeLine() {
    ctx.fillStyle = "#fc5f00";
    ctx.fillRect(80, y-5, 100, 2);
}

function addHBlackLine() {
    y += 15;
    var grd=ctx.createRadialGradient(375,y,5,375,y,300);
    grd.addColorStop(0,"#b5b5b5");
    grd.addColorStop(1,"white");
    ctx.fillStyle = grd;
    ctx.fillRect(150, y, 450, 1);
    y += 12;
}

function addTitle(title) {
    canv.style.letterSpacing = "3px";
    ctx.font = "1 14px Impact, Charcoal, sans-serif";
    // ctx.font = "900 17px 'Tw Cen MT'";
    ctx.fillStyle = "#191919";
    ctx.textAlign = "left";
    ctx.fillText(title, 185, y);
}

function addText(text) {
    canv.style.letterSpacing = "0px";
    // ctx.font = "100 17px 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    ctx.font = "1 20px 'Tw Cen MT'";
    ctx.fillStyle = "#191919";
    ctx.textAlign = "center";
    var l = text.length;
    var c = lineLength;
    while (c - lineLength < l) {
        y += lineSpace;
        if((l - c + lineLength) > lineLength) {
            var t = findSpace(text, c);
        }
        else {
            t = c;
        }
        ctx.fillText(text.substring((c-lineLength), t), 375, y);
        c = t + lineLength;
    }
}

function findSpace(str, index) {
    for(var c = index-5; c < str.length; c++) {
        if(str.charAt(c) === ' ') {
            return c;
        }
    }
}