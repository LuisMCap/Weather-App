// import {getData} from './API'
import '../style/style.css'
import {SearchCont} from './searchCont'
import {DayCont} from './weatherCont'
import {API} from './API'

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
        let data = await API.getData()
        feelsLike.textContent = data.daily['0']['feels_like']['day']
        console.log(data.daily['0']['feels_like']['day'])
        console.log(new Date(data.daily['0'].sunrise*1000))
    }

    const updateDOM = () => {
        SearchCont.update()
    }

    return {updateDOM, populateFields}
})()

Page.updateDOM()
Page.populateFields()