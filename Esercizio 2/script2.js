let counter = 0

const initialTimer = document.getElementById('timer')

const sessioneTimer = 'Local Timer'

const timer = function(){
    ++counter
    const hour = Math.floor(counter / 3600)
    const minute = Math.floor((counter - hour * 3600)/ 60)
    const second = counter - (hour * 3600 + minute * 60)
    initialTimer.innerHTML = `${hour}:${minute}:${second}`
    sessionStorage.setItem(sessioneTimer, counter)  
}

if (sessionStorage.getItem(sessioneTimer)){
    counter = sessionStorage.getItem(sessioneTimer)
}

const intervalTimer = setInterval(timer, 1000)

timer()
