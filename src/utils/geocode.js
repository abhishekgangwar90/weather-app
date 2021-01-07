const request = require('postman-request');

const urls = require('../constants');


/**
 * Takes a location and a callback it's lat & lang
 * @param {*} location 
 * @param {*} callback 
 */
function geoCode(location, callback){
    
    const urlGeo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${urls.API_KEYS.MAP_BOX}`;

    request({url: urlGeo, json: true}, (err, res) =>{
        if(err){
            callback('Something went wrong, please try after some time.', undefined)
        } else if(res && res.body && res.body.features.length ===0){
            callback('Not able to find location, Please try searching something else.', undefined)
        } else{
            console.log(res.body.features)
            const lat = res.body.features[0].center[1];
            const long = res.body.features[0].center[0];
            callback(undefined,{
                lat,
                long
            })
        }
    })
}

module.exports = geoCode;