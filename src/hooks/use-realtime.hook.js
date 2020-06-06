import { useFetch } from "./use-fetch.hook";
import { addHours, createUrl } from "../utilities";

const HOURLY_URL = 'https://api.climacell.co/v3/weather/forecast/hourly';
const REALTIME_URL = 'https://api.climacell.co/v3/weather/realtime';
const UNIT_SYSTEM = 'si';
const FIELDS = 'precipitation,temp,feels_like,weather_code';

const start = new Date();
const end = addHours({ date: start, hours: 6 });

const useHourly = ({ lat, lon, apikey }) => {
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

const useRealtime = ({ lat, lon, apikey }) => {
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
