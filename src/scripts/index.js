import '../style/style.css'
import {SearchCont} from './searchCont'
import {DayCont} from './weatherCont'
import {API} from './API'
import {TodayCont} from './todayCont'

let weatherForecastCont = document.getElementById('weather-forecast')


let monday = new DayCont('Monday', '28', '26')
monday.update()
monday.appendToElement(weatherForecastCont)

const Page = (function() {

    async function populateFields() {
        let data = await API.getData('Las Vegas')
        console.log(data)
        populateTodayFields(data)
        populateTodayDate(data)
    }

    const populateTodayFields = (data) => {
        TodayCont.changeTodaySpecs(
            data.current.feels_like, 
            data.current.humidity, 
            data.daily['0'].pop,
            data.current.wind_speed)
    };

    const populateTodayDate = (data) => {
        TodayCont.changeTodayDate(
            data.timezone.split('/')[1],
            new Date(data.current.dt*1000).toLocaleDateString(),
            new Date(data.current.dt*1000).toLocaleTimeString()
        )
    };

    const updateDOM = () => {
        SearchCont.update()
    };

    return {updateDOM, populateFields}
})()

Page.updateDOM()
Page.populateFields()