// Első megjelenítési idő
var ora1 = 8;
var kperc1 = 5; // kezdő perc
var vperc1 = 52;  // vége perc

// Második megjelenítési idő
var ora2 = 16;
var kperc2 = 0; // kezdő perc
var vperc2 = 59; // vége perc

//Set time
function currentTime() {
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    //console.log(hh + "  " + mm + "  " + ss);
    showTheTime(hh, mm, ss);

    setTimeout(currentTime, 1000);
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
    else return false;
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
    
    let e = document.getElementById("onlyTime")//  getElementsByClassName("onlyTime");
    /*for (var i = 0; i < e.length; i++) {
        e[i].style.display = "none"; 
    }*/
    e.style.display = "none";
    // Lekérjük az időt
    const d = new Date();
    var hh = d.getHours();
    var mm = d.getMinutes();

    // Működés meghatározás
    let op = true;
    op = operationTime(hh, mm);
    console.log(op);

    // Ha op = false, az idő jelenik meg
    if (!op) {
        /*for (var j = 0; j < e.length; j++) {
            e[j].style.display = "block"; 
        }*/
        e.style.display = "block";
    }

    setTimeout(showOnlyTime, 4000);
}

function showWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Abony&units=metric&lang=hu&appid=1b9398d38b13dfefd81a6195c9d4a284')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        
        document.getElementById('name1').innerHTML = nameValue;
        document.getElementById('temp1').innerHTML = tempValue + " Celsius-fok";
        document.getElementById('desc1').innerHTML = descValue.toUpperCase();
        document.getElementById('name2').innerHTML = nameValue;
        document.getElementById('temp2').innerHTML = tempValue + " Celsius-fok";
        document.getElementById('desc2').innerHTML = descValue.toUpperCase();
    });
    //console.log("Időjárás lekérés!");
    setTimeout(showWeather, 600 * 1000);
}

function Main() {
    currentTime();
    carousel();
    showOnlyTime();
    showWeather();
}

Main();