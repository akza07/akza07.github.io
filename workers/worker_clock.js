// Apr 19 6:01 PM
const clock = ()=> {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let dateObj = new Date()
    let month = months[dateObj.getMonth()]
    let date = dateObj.getDate()
    let [hours, day] = hoursHandler(dateObj.getHours())
    let minutes = dateObj.getMinutes()
    let seconds = dateObj.getSeconds()
    postMessage(`${month} ${date}&nbsp;&nbsp;${hours}:${minutes}:${seconds} ${day}`)
}

const hoursHandler = (hours)=> {
    if ( hours > 12) {
        hours = hours % 12
        return [hours, "PM"]
    }
    else 
        return [hours,"AM"]
}

tracker = setInterval(clock,1000)