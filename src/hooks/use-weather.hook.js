import { useFetch } from "./use-fetch.hook";
import { createUrl } from "../utilities";

const HOURLY_URL = 'https://api.climacell.co/v3/weather/forecast/hourly';
const REALTIME_URL = 'https://api.climacell.co/v3/weather/realtime';
const UNIT_SYSTEM = 'si';
const FIELDS = 'precipitation,temp,feels_like,weather_code';

/**
 * A react hook that fetches hourly forecast for a given location (<lat>, <lon>) for a time frame (<start>, <end>).
 * @param apikey
 * @param lat
 * @param lon
 * @param start
 * @param end
 * @returns {[response, loading, hasError]}
 */
const useHourly = ({ apikey, lat, lon, start, end }) => {
    const url = createUrl({
        url: HOURLY_URL,
        query: {
            apikey,
            lat,
            lon,
            unit_system: UNIT_SYSTEM,
            fields: FIELDS,
            start_time: start.toISOString(),
            end_time: end.toISOString()
        }
    });

    return useFetch({ url });
};

/**
 * A react hook that fetches realtime data for a given location (<lat>, <lon>) for a time frame (<start>, <end>).
 * @param apikey
 * @param lat
 * @param lon
 * @returns {[response, loading, hasError]}
 */
const useRealtime = ({ apikey, lat, lon }) => {
    const url = createUrl({
        url: REALTIME_URL,
        query: {
            apikey,
            lat,
            lon,
            unit_system: UNIT_SYSTEM,
            fields: FIELDS,
        }
    });

    return useFetch({ url });
};

export { useHourly, useRealtime };
