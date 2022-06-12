import { DayCont } from "./weatherCont";

const ForecastCont = (function() {
    const weatherForecastCont = document.getElementById('weather-forecast')
    const weekDays = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }

    const createDayCont = (dayNumber, temp, min) => {
        let day = weekDays[dayNumber]
        let dayCont = new DayCont(day, temp, min)
        dayCont.update()
        dayCont.appendToElement(weatherForecastCont)
    };

    return {createDayCont}

})();

export {ForecastCont}
