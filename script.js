setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const curDate = new Date()
    const secondsRation = curDate.getSeconds() /60
    const minRation = (secondsRation + curDate.getMinutes())/60
    const hourRation = (minRation + curDate.getHours())/12

    setRotation(secondHand, secondsRation)
    setRotation(minHand, minRation)
    setRotation(hourHand, hourRation)

}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio *360)
}

setClock()