console.log("It's working");


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

function hideAllPanel() {
    console.log("Triggered hideAllPanel")
    panelVisible.opacity = "0"
}

// Toggle all context panels off on desktop click
// document.querySelector('.main').addEventListener("click", () => hideAllPanel())
// Toggle Notification panel visibility
document.querySelector(".date").addEventListener("click", () => showNotifications())
