import FreezingRain from './icons/rain-freezing-colored.svg';
import IcePellets from './icons/ice-pellets-colored.svg';
import Snow from './icons/snow-colored.svg';
import Thunderstorm from './icons/thunderstorm-colored.svg';
import RainHeavy from './icons/rain-heavy-colored.svg';
import Rain from './icons/rain-moderate-colored.svg';
import Fog from './icons/fog-colored.svg';
import Cloudy from './icons/cloudy-colored.svg';
import PartlyCloudy from './icons/partly-cloudy-day-colored.svg';
import Clear from './icons/clear-day-colored.svg';

export const WEATHER_CODES = {
    FREEZING_RAIN_HEAVY: 'freezing_rain_heavy',
    FREEZING_RAIN: 'freezing_rain',
    FREEZING_RAIN_LIGHT: 'freezing_rain_light',
    FREEZING_DRIZZLE: 'freezing_drizzle',
    ICE_PELLETS_HEAVY: 'ice_pellets_heavy',
    ICE_PELLETS: 'ice_pellets',
    ICE_PELLETS_LIGHT: 'ice_pellets_light',
    SNOW_HEAVY: 'snow_heavy',
    SNOW: 'snow',
    SNOW_LIGHT: 'snow_light',
    FLURRIES: 'flurries',
    TSTORM: 'thunderstorm',
    RAIN_HEAVY: 'rain_heavy',
    RAIN: 'rain',
    RAIN_LIGHT: 'rain_light',
    DRIZZLE: 'drizzle',
    FOG_LIGHT: 'fog_light',
    FOG: 'fog',
    CLOUDY: 'cloudy',
    MOSTLY_CLOUDY: 'mostly_cloudy',
    PARTLY_CLOUDY: 'partly_cloudy',
    MOSTLY_CLEAR: 'mostly_clear',
    CLEAR: 'clear'
};

export function getIcon(weatherCode) {
    switch (weatherCode) {
        case WEATHER_CODES.FREEZING_RAIN_HEAVY:
        case WEATHER_CODES.FREEZING_RAIN:
        case WEATHER_CODES.FREEZING_RAIN_LIGHT:
        case WEATHER_CODES.FREEZING_DRIZZLE:
            return FreezingRain;
        case WEATHER_CODES.ICE_PELLETS_HEAVY:
        case WEATHER_CODES.ICE_PELLETS:
        case WEATHER_CODES.ICE_PELLETS_LIGHT:
            return IcePellets;
        case WEATHER_CODES.SNOW_HEAVY:
        case WEATHER_CODES.SNOW:
        case WEATHER_CODES.SNOW_LIGHT:
        case WEATHER_CODES.FLURRIES:
            return Snow;
        case WEATHER_CODES.TSTORM:
            return Thunderstorm;
        case WEATHER_CODES.RAIN:
        case WEATHER_CODES.RAIN_LIGHT:
        case WEATHER_CODES.DRIZZLE:
            return Rain;
        case WEATHER_CODES.RAIN_HEAVY:
            return RainHeavy;
        case WEATHER_CODES.FOG_LIGHT:
        case WEATHER_CODES.FOG:
            return Fog;
        case WEATHER_CODES.CLOUDY:
        case WEATHER_CODES.MOSTLY_CLOUDY:
            return Cloudy;
        case WEATHER_CODES.PARTLY_CLOUDY:
        case WEATHER_CODES.MOSTLY_CLEAR:
            return PartlyCloudy;
        case WEATHER_CODES.CLEAR:
            return Clear;
        default:
            return null;
    }
}
