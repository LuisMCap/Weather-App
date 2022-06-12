import dayCabin1 from '../assets/cabin.jpg'
import dayCabin2 from '../assets/cabin-day.jpg'
import nightCabin1 from '../assets/cabin-dark.jpg'
import nightCabin2 from '../assets/cabin-dark2.jpg'

const Backround = (function(){
    const dayBackgrounds = [dayCabin1, dayCabin2]
    const nightBackground = [nightCabin1, nightCabin2]

    const setBackground = (image) => {
        document.body.style.backgroundImage = `url(${image})`
    };

    const randomNumber = () => {
        let imageIndex = Math.round(Math.random())
        return imageIndex
    }

    const setDayOrNightBackground = (time) => {
        let hours = time.getHours()
        let imageIndex = randomNumber()
        if (hours > 18 || hours <= 7) {
            setBackground(nightBackground[imageIndex])
        }
        else {
            setBackground(dayBackgrounds[imageIndex])
        }
    }

    return {setDayOrNightBackground}
})()

const Metric = (function(){
    const metrics = {
        'Celcius': '°C',
        'Fahrenheit': '°F'
    };

    const getDegrees = (displayedMetric) => {
        return metrics[displayedMetric]
    };
    
})()

export {Backround}