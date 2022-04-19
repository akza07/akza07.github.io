console.log("It's working");
// Watches the clicks on Date
document.querySelector(".date").addEventListener("click", () => showNotifications())


// Opens notification panel
function showNotifications() {
    panelVisible = document.querySelector(".notif-panel").style;    
    if (panelVisible.opacity === "0") {
        panelVisible.opacity = "1"
        document.querySelector('.date').classList.add('active')
    } else {
        panelVisible.opacity = "0"
        document.querySelector('.date').classList.remove('active')

    }
}

