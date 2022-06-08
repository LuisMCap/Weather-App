import '../style/style.css'
import {SearchCont} from './searchCont'
import {DayCont} from './weatherCont'
import {API} from './API'
import {TodayCont} from './todayCont'

let weatherForecastCont = document.getElementById('weather-forecast')


let monday = new DayCont('Monday', '28', '26')
monday.update()
monday.appendToElement(weatherForecastCont)

// let data = API.getData()

// data.then(data=> {
//     console.log(data)
// })

const Page = (function() {
    const weatherForecastCont = document.getElementById('weather-forecast')
    const feelsLike = document.getElementById('feels-like')

    async function populateFields() {
        let data = await API.getData('caracas')
        console.log(data.current)
        console.log(data)
        console.log(new Date(data.current.dt*1000).toDateString())
        console.log(new Date(data.current.dt*1000).toLocaleDateString())
        console.log(new Date(data.current.dt*1000).toLocaleTimeString())
        populateTodayFields(data)
    }

    const populateTodayFields = (data) => {
        TodayCont.changeTodaySpecs(
            data.current.feels_like, 
            data.current.humidity, 
            data.daily['0'].pop,
            data.current.wind_speed)
    }

    const updateDOM = () => {
        SearchCont.update()
    }

    return {updateDOM, populateFields}
})()

Page.updateDOM()
Page.populateFields()