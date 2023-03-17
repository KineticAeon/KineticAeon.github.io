function clockTime() {
    let date = new Date()
    let ampm = date.getHours() > 11 ? 'PM' : 'AM';
    let hours = date.getHours() % 12 || 12;
    let minutes = date.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    document.getElementById('clock').innerHTML = `${hours}:${minutes} ${ampm}`
}
setInterval(clockTime, 1000);