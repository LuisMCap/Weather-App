import { SearchCont } from "./searchCont"

const TodayCont = (function() {
    const feelsLike = document.getElementById('feels-like')
    const humidity = document.getElementById('humidity')
    const chanceOfRain = document.getElementById('chance-rain')
    const windSpeed = document.getElementById('wind-speed')
    const todayTemp = document.getElementById('temp')
    const elementsArray = [feelsLike, humidity, chanceOfRain, windSpeed, todayTemp]

    const city = document.getElementById('city')
    const todayDate = document.getElementById('today-date')
    const todayTime = document.getElementById('today-time')

    const changeTextInElement = (element, text) => {
        element.textContent = text
    };
    
    const changeTodaySpecs = (feels, hum, chance, wind, temp) => {
        let valuesToDisplay = [feels, hum, chance, wind, temp]
        for (let i=0;i<elementsArray.length;i++) {
            let value = roundCurrent(elementsArray[i], valuesToDisplay[i])
            if (value) {
                changeTextInElement(elementsArray[i], value)
            }
            else {
                changeTextInElement(elementsArray[i], valuesToDisplay[i])
            }
        }
    }

    const roundCurrent = (element, value) => {
        let metrics = SearchCont.getMetrics()
        if (metrics == 'Celcius') {
            if (element.id == 'feels-like' || element.id == 'temp') {
                value = `${Math.round(value)} °C`
            }
            else if (element.id == 'wind-speed') {
                value = `${(Math.round(value * 10 * 3.6) / 10)} km/h`
            }
            else {
                value = `${value}%`
            }
        }
        else if (metrics == 'Farenheit') {
            if (element.id == 'feels-like' || element.id == 'temp') {
                value = `${Math.round(value)} °F`
            }
            else if (element.id == 'wind-speed') {
                value = `${(Math.round(value * 10 * 3.6) / 10)} km/h`
            }
            else {
                value = `${value}%`
            }
        }
        return value
    };

    const changeTodayDate = (desiredCity, date, time) => {
        changeTextInElement(city,desiredCity)
        changeTextInElement(todayDate,date)
        changeTextInElement(todayTime,time)
    }
    
    return {changeTodaySpecs, changeTodayDate}

})()

export {TodayCont}