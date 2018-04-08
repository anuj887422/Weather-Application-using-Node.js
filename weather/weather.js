const request = require('request');

var getWeather = (latitude,longitude,callback) => {
    request({
        url: `https://api.darksky.net/forecast/6ac6da24a36d458738511a9261f0fbbe/${latitude},${longitude}`,
        json: true
    }, (error,response,body) => {
        if(!error && response.statusCode == 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else{
            callback('Unable to fetch weather.');
        }
    });
};


module.exports = {
    getWeather
};