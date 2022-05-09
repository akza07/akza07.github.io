console.log("It's working");
// Watches the clicks on Date
document.querySelector(".date").addEventListener("mousedown", () => showNotifications(".date",".notif"))

// Watches the clicks on menu
document.querySelector(".menu").addEventListener("mousedown", () => showNotifications(".menu",".menu-expanded"))


// Opens notification panel
function showNotifications(clickable,menuName) {
    console.log("Click registered")
    panel = document.querySelector(menuName).style;
    if (panel.opacity === "0") {
        panel.opacity = "1"
        document.querySelector(clickable).classList.add('active')
    } else {
        panel.opacity = "0"
        document.querySelector(clickable).classList.remove('active')
    }
}

/* 
    Adding web worker for the Clock
*/
function startClock() {
    if( typeof(Worker) !== "undefined") {
        ticker = new Worker("./workers/worker_clock.js")
        ticker.onmessage = function(e) {
            document.querySelector(".date").innerHTML = e.data
        }
        console.log("Clock started")
    }
    else {
        document.querySelector(".date").innerHTML = "Apr 19 6:01"
        console.error("Web worker not supported")
    }
}

