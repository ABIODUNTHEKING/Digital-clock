const day = document.getElementById("day")
const hour = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")
const ampm = document.getElementById("ampm")

function updateTime(){
    let updateDay = new Date().getDay()

    switch(updateDay){
        case 1:
            day.innerText = "MON"
            break;

        case 2:
            day.innerText = "TUE"
        break;

        case 3:
            day.innerText = "WED"
        break;
            
        case 4:
            day.innerText = "THU"
        break;
            
        case 5:
            day.innerText = "FRI"
        break;

        case 6:
            day.innerText = "SAT"
        break;
            
        case 7:
            day.innerText = "SUN"
        break;
    }
    
    let updateHour = new Date().getHours()
    if(updateHour > 12){
        updateHour -= 12
        ampm.innerText = "PM"
    }
    
    hour.innerText = updateHour
    if(hour.innerText < 10){
        hour.innerText = "0" + updateHour
    }


    let updateMin = new Date().getMinutes()
    min.innerText = updateMin
    if(min.innerText < 10){
        min.innerText = "0" + updateMin
    }


    let updateSec = new Date().getSeconds()
    sec.innerText = updateSec
    if(sec.innerText < 10){
        sec.innerText = "0" + updateSec
    }
  

    setTimeout(updateTime, 1000)

 
}

updateTime()