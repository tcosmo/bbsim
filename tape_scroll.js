var canvas = document.getElementById("canvas");
var dragging = false;
var lastX;
var tapeOriginX = 5000;
var marginLeft = -1 * tapeOriginX;
canvas.style.marginLeft = marginLeft + "px";

canvas.addEventListener('mousedown', function (e) {
    var evt = e || event;
    dragging = true;
    lastX = evt.clientX;
    e.preventDefault();
}, false);

window.addEventListener('mousemove', function (e) {
    var evt = e || event;
    if (dragging) {
        var delta = evt.clientX - lastX;
        lastX = evt.clientX;
        marginLeft += delta;
        canvas.style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
}, false);

window.addEventListener('mouseup', function () {
    dragging = false;
}, false);