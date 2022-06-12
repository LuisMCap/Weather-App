
// https://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=20f7632ffc2c022654e4093c6947b4f4
// https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`

console.log(new Date(1653523200*1000))

const API = (function () {
    const KEY = 'db3820a5bf5795504ce2145bce769201'

    async function fetchCoordinates(selectedCity) {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&APPID=${KEY}`)
            return await response.json()
        }
        catch(err) {
            console.error(err)
        }
    }

    async function fetchData(lat,lon) {
        let units = 'metric'
        try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`)
            return await response.json()
        }
        catch(err){
            console.error(err)
        }
    }

    async function getData(city) {
        let coordinates = await fetchCoordinates(city)
        return await fetchData(coordinates['coord']['lat'], coordinates['coord']['lon'])
    }

    const showData = () => {
        console.log(data)
        data.then(fetchedData => {
            console.log(fetchedData)
        })
    }

    return {fetchCoordinates, fetchData, showData, getData}

})()

export {API}