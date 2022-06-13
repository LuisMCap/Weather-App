import { DayCont } from "./weatherCont";
import { SearchCont } from "./searchCont"
import { Metric } from "./utils";

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

    const createDayCont = (dayNumber, dataTemp, dataMin) => {
        let day = weekDays[dayNumber]
        let temp = addMetricsToValue(dataTemp)
        let min = addMetricsToValue(dataMin)
        let dayCont = new DayCont(day, temp, min)
        dayCont.update()
        dayCont.appendToElement(weatherForecastCont)
    };

    const cleanCont = () => {
        while (weatherForecastCont.hasChildNodes()) {
            weatherForecastCont.removeChild(weatherForecastCont.lastChild)
        }
    };

    const addMetricsToValue = (value) => {
        let metrics = SearchCont.getMetrics()
        let degrees = Metric.getDegrees(metrics)
        return value + degrees
    }

    return {createDayCont, cleanCont}

})();

export {ForecastCont}
