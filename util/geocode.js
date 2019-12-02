const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.darksky.net/forecast/91e56d427c344970c42ce2754662e7fb/37.8267,-122.4233?units=si'

    request({url: url, json: true},(error,response)=>{
    // console.log(response.body)
    if(error){
        callback ({
            error: error
        })
    }else if(response.body){
        callback({
            location: response.body.daily.data[0].summary+'\n It is current '+response.body.currently.temperature+' Celcios out. \n There is a '+response.body.currently.cloudCover*100+'% chance of rain.'
        })
    } else {
        callback ({
            error: 'unfound data'
        })
    }
    })
    const urlBoxMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoibmF0YTkxIiwiYSI6ImNrMm5mZTVsdTA5MmMzbXM3eWNvc3MzNTcifQ.cgs8o1MjxP5klrbVPIhM1w'
}
module.exports = {
    request: geocode
}