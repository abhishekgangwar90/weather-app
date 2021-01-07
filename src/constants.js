const API_KEYS = {
    WEATHER_STACK: 'c37a866edc894474725c1136419d361b',
    MAP_BOX: 'pk.eyJ1IjoiYWJoaXNoZWsyNTU4IiwiYSI6ImNramxvMTBuZzBhYmsyeXRmemJvcmJ1b3cifQ.6OLvJsYJYVUdlXXb5NIFEA'
}

const ENDPOINTS = {
    WEATHER_STACK: `http://api.weatherstack.com/current`,
    MAP_BOX: `https://api.mapbox.com/geocoding/v5/mapbox.places`
}

module.exports = {
    API_KEYS,
    ENDPOINTS
}