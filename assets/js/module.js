/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright emmafodor 2023 All rights reserved
 * @author emmafodor <emanuelafodor9@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Monday 10, Apr"
 */

export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
};

/**
 *
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone){
    const date = new Date((timeUnix + timezone)*1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 *
 * @param {number} mps Meter per seconds
 * @returns {number}  Kilometer per hours
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory.",
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable."
    },
    3: {
        level: "Moderate",
        message: "Persons of sensitive groups may experience health effects."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions."
    }
}








