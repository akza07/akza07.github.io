console.log("It's working");
// Watches the clicks on Date
document.querySelector(".date").addEventListener("click", () => showNotifications(".date",".notif"))

// Watches the clicks on menu
document.querySelector(".menu").addEventListener("click", () => showNotifications(".menu",".menu-expanded"))


// Opens notification panel
function showNotifications(clickable,menuName) {
    panel = document.querySelector(menuName).style;
    if (panel.opacity === "0") {
        panel.opacity = "1"
        document.querySelector(clickable).classList.add('active')
    } else {
        panel.opacity = "0"
        document.querySelector(clickable).classList.remove('active')
    }
}

