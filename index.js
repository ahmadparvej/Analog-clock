setInterval(() => {
    d = new Date();
    hours = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();
    hrotation = 30*hours+mins/2;
    mrotation = 6*mins;
    srotation = 6*secs;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


}, 1000);