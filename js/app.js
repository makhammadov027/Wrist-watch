const time = document.querySelector('p')

setInterval(() => {
}, 1000)

setInterval(() => {
    time.textContent =`${new Date().toLocaleTimeString()}`    
}, 1000)