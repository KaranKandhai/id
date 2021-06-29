function toonHint(hint) {
alert(hint);
}

var counter = 60;

setInterval( function(){
    counter--;

    if( counter >= 0){
        id = document.getElementById("count");
        id.innerHTML = counter;
    }

    if ( counter === 0 ){
        id.innerHTML = "TIME OUT";
    }

}, 1000);

function specialHint(){
    prompt("Please enter your name", "");
}