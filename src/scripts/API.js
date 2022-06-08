const KEY = 'db3820a5bf5795504ce2145bce769201'

const cities = {
    caracas: {
        lat: 10.506098,
        lon: -66.9146017
    },
    miami: {
        lat: 25.7539,
        lon: -80.2253
    },
}

// https://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=20f7632ffc2c022654e4093c6947b4f4
// https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`


async function getData(selectedCity) {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cities[selectedCity]['lat']}&lon=${cities[selectedCity]['lon']}&appid=${KEY}&units=metric`)
        return await response.json()
    }
    catch(err){
        console.error(err)
    }
}

console.log(new Date(1653523200*1000))

// export {getData}