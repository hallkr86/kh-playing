//console.log("hello world");
var buttonEl = document.getElementById("btn-one");
var buttonherEl = document.getElementById("btn-her");
var buttonhimEl = document .getElementById("btn-him");

buttonEl.addEventListener("click", function () {
    console.log("you clicked me!");
});

buttonherEl.addEventListener("click", function () {
    console.log("you clicked her!");
});

buttonhimEl.addEventListener("click", function () {
    console.log("you clicked him!");
});