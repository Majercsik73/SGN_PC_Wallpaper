// Első megjelenítési idő
var ora1 = 19;
var kperc1 = 55; // kezdő perc
var vperc1 = 56;  // vége perc

// Második megjelenítési idő
var ora2 = 19;
var kperc2 = 52; // kezdő perc
var vperc2 = 53; // vége perc

//Set time
function currentTime() {
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    showTheTime(hh, mm, ss);
    var t = setTimeout(function(){ currentTime() }, 1000);
}

// Show the time
function showTheTime(hh, mm, ss) {
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
   
    let time = hh + ":" + mm + ":" + ss + " ";

    document.getElementById("clock3").innerText = time;
}

// Clock and wallpaper operating timer
function operationTime(hh, mm) {
    if (hh == ora1 && mm > kperc1-1 && mm < vperc1 || hh == ora2 && mm > kperc2-1 && mm < vperc2) {
        return true;
    }
}

//Carousel
var slideIndex = 0;
function carousel() {

    let x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // Lekérjük az időt
    const d = new Date();
    var hh = d.getHours();
    var mm = d.getMinutes();

    // Működés meghatározás
    let op = false;
    op = operationTime(hh, mm);
    
    // Ha op = true, a képnézegető megjelenik
    if (op) {
        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1
        } 
        x[slideIndex-1].style.display = "block";
    }

    setTimeout(carousel, 4000); 
}


function showOnlyTime() {
    
    let e = document.getElementsByClassName("onlyTime");
    for (var i = 0; i < e.length; i++) {
        e[i].style.display = "block"; 
    }
    // Lekérjük az időt
    const d = new Date();
    var hh = d.getHours();
    var mm = d.getMinutes();

    // Működés meghatározás
    let op = true;
    op = operationTime(hh, mm);

    // Ha op = false, az idő jelenik meg
    if (op) {
        for (var j = 0; j < e.length; j++) {
            e[j].style.display = "none"; 
        }
    }

    setTimeout(showOnlyTime, 4000);
}


function Main(){
    
    currentTime();
    carousel();
    showOnlyTime();
}
Main();