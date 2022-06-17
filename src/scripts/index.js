import '../style/style.css'
import {SearchCont} from './searchCont'
import {DayCont} from './weatherCont'
import {API} from './API'
import {TodayCont} from './todayCont'
import {Backround, Error} from './utils'
import { ForecastCont } from './forecastCont'

const Page = (function() {
    async function populateFields(city) {
        try {
            let data = await API.getData(city)
            Backround.setDayOrNightBackground(new Date((data.current.dt+14400+data.timezone_offset)*1000))
            populateTodayFields(data)
            populateTodayDate(data)
            loopDailyData(data)
            errorHandling()
        }
        catch(err) {
            Error.notFoundError()
            console.log(err)
        }
    }

    const populateTodayFields = (data) => {
        TodayCont.changeTodaySpecs(
            data.current.feels_like, 
            data.current.humidity, 
            data.daily['0'].pop,
            data.current.wind_speed,
            data.current.temp
        )
    };

    const populateTodayDate = (data) => {
        TodayCont.changeTodayDate(
            data.timezone.split('/')[1].replace('_',' '),
            new Date((data.current.dt+14400+data.timezone_offset)*1000).toLocaleDateString(),
            new Date((data.current.dt+14400+data.timezone_offset)*1000).toLocaleTimeString()
        )
    };

    const loopDailyData = (data) =>{
        ForecastCont.cleanCont()
        for (let i=0;i<data.daily.length; i++) {
            if (i==0) {continue}
            let day = new Date((data.daily[i].dt+14400+data.timezone_offset)*1000).getDay()
            let temp = Math.round(data.daily[i].temp.max)
            let min = Math.round(data.daily[i].temp.min)
            ForecastCont.createDayCont(day,temp,min)
        }
    };

    const errorHandling = () => {
        Error.cleanErrorDiv()
    }

    const updateDOM = () => {
        SearchCont.update()
    };

    return {updateDOM, populateFields}
})()

Page.updateDOM()

export {Page}