// import {getData} from './API'
import '../style/style.css'
import {SearchCont} from './searchCont'
import {DayCont} from './weatherCont'

let weatherForecastCont = document.getElementById('weather-forecast')


let monday = new DayCont('Monday', '28', '26')
monday.update()
monday.appendToElement(weatherForecastCont)


SearchCont.update()

// let data = getData('caracas')

// data.then((response)=> {
//     console.log(response.main.temp)
// })