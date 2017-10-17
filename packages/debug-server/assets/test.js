document.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Script Injected";

    div.style.position = "absolute"
    div.style.left = "0"
    div.style.top = "0"
    div.style.zIndex = "1000"

    document.body.appendChild(div);
})