// var light = document.getElementById("light");
// var dark = document.getElementById("dark");
// var box = document.querySelector("body"); 

// function light() {
//     box.style.backgroundColor = "white";
//     box.style.transition = "1s";
// }

// function dark() {
//     box.style.backgroundColor = "#111";
// }

var darken = document.getElementById("dark");
var box = document.querySelector("body");

function dark() {
    box.style.backgroundColor = "#111";
    box.style.transition = "1s"
}

function light() {
    box.style.backgroundColor = "white"
}