import widget from "./widget";

document.getElementById("app").appendChild(widget());

if (module.hot) {
    module.hot.accept('./widget.js', function() {
        console.log("@@@@@@ accepting widget.js @@@@@");
        document.getElementById("app").innerHTML = "";
        document.getElementById("app").appendChild(widget());
    });
}