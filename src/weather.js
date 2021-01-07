const geoCode = require('./utils/geocode')
const weatherstack = require('./utils/weatherstack')

/**
 * Takes location returns weather info
 * @param {*} location 
 */
function weatherDetails(location, callback){
    geoCode(location, (err, {lat, long}) =>{
        if(err){
          return callback(err, undefined)
        } 

        weatherstack(lat,long, (error, res) =>{
            if(error){
                return callback(error, undefined)
            }
            callback(undefined, res)
        })
    })
}

module.exports = weatherDetails;