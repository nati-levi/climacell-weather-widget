/**
 * Creates a full URL from a base URL and query params.
 * @param url
 * @param query
 * @returns {string}
 */
const createUrl = ({ url, query = {} }) => {
    const urlBuilder = new URL(url);

    Object.entries(query).forEach(([key, value]) => {
        if (value == null) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(val => urlBuilder.searchParams.append(key, val));
            return;
        }

        urlBuilder.searchParams.append(key, value);
    });

    return urlBuilder.toString();
};

/**
 * Returns a date <hours> after the given <date>.
 * @param date
 * @param hours
 */
const addHours = ({ date, hours = 0 }) => {
    const newDate = new Date(date.valueOf());
    newDate.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return newDate;
};

/**
 * Formats time in a way we want to present it.
 * Examples: 7AM, 12PM
 * @param time
 * @returns {string}
 */
const formatTime = (time) => {
    const hours = new Date(time).getHours();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    let display = hours % 12;
    if (display === 0) {
        display = 12;
    }
    return `${display}${suffix}`;
};

/**
 * Converts weather code value to human display string.
 * Example: freezing_rain to Freezing Rain
 * @param str
 * @returns {string}
 */
const prettyPrintWeatherCode = (str) =>{
    return str.replace('_', ' ').replace(/\b[a-zA-Z]/g, (first) =>first.toUpperCase());
};

export { createUrl, addHours, formatTime, prettyPrintWeatherCode };
