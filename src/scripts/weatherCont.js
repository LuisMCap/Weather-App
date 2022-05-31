import Cloud from '../assets/cloud.svg'

class DayCont {
    constructor(day, temp, lowestTemp) {
        this.day = day;
        this.temp = temp;
        this.lowestTemp = lowestTemp;
    };

    createElements() {
        this.weatherCont = document.createElement('div')
        this.weatherDayCont = document.createElement('div')
        this.weatherDay = document.createElement('div')
        this.weatherTempCont = document.createElement('div')
        this.weatherTemp = document.createElement('div')
        this.lowestTempCont = document.createElement('div')
        this.lowerTemp = document.createElement('div')
        this.iconWeatherCont = document.createElement('div')
        this.iconWeather = document.createElement('img')
    }

    addClasses() {
        this.weatherCont.classList.add('weather-cont')
        this.weatherDayCont.classList.add('weather-day-cont')
        this.weatherDay.classList.add('weather-day')
        this.weatherTempCont.classList.add('weather-temp-cont')
        this.weatherTemp.classList.add('weather-temp')
        this.lowestTempCont.classList.add('lowest-temp-cont')
        this.lowerTemp.classList.add('lower-temp')
        this.iconWeatherCont.classList.add('icon-weather-cont')
        this.iconWeather.classList.add('icon-weather')
    }

    appendElements() {
        this.weatherDayCont.append(this.weatherDay)
        this.weatherTempCont.append(this.weatherTemp)
        this.lowestTempCont.append(this.lowerTemp)
        this.iconWeatherCont.append(this.iconWeather)
        this.weatherCont.append(this.weatherDayCont, this.weatherTempCont, this.lowestTempCont, this.iconWeatherCont)
    }

    innerText() {
        this.weatherDay.textContent = this.day
        this.weatherTemp.textContent = this.temp
        this.lowerTemp.textContent = this.lowestTemp
        this.iconWeather.src = Cloud
    }

    update() {
        this.createElements()
        this.addClasses()
        this.appendElements()
        this.innerText()
    }

    appendToElement(element) {
        element.append(this.weatherCont)
    }
}

export {DayCont}