const request = require('postman-request');

const urls = require('../constants');


/**
 * Takes lat and lang as input and returns weather information of that place.
 * @param {*} lat 
 * @param {*} long 
 * @param {*} callback 
 */
function weatherstack(lat, long, callback){
    
    const url = `${urls.ENDPOINTS.WEATHER_STACK}?access_key=${urls.API_KEYS.WEATHER_STACK}&query=${lat},${long}`;

    request({url, json: true}, (err, res) =>{
        if(err){
            callback('Something went wrong, please try after some time.', undefined)
        } else if(res && res.body.success === false && res.body.error){
            callback('Not able to find weather details, please try another location', undefined)
        } else{
            const {location, current} = res.body;
            callback(undefined, {location, current})
        }
    })
}

module.exports = weatherstack;