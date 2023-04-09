/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright emmafodor 2023 All rights reserved
 * @author emmafodor <emanuelafodor9@gmail.com>
 */

'use strict';

const api_key="867f9cfd5fb0a0715ce2f8a7e4e6c42b";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
*/
export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     *
     * @param {string} query  Search query e.g.:"Cluj","Sibiu" ..
     * @returns {string}
     */
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }

}

