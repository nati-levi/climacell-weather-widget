import React from 'react';
import './realtime.component.css';
import { Temp } from "./temp.component";
import { WeatherIcon } from "./weather-icon.component";
import { prettyPrintWeatherCode } from "../utilities";

function Realtime({ realtime }) {
    return (
        <div className="realtime">
            <div className="realtime-temp"><Temp value={realtime.temp.value} /></div>
            <div className="realtime-temp-degrees">°C</div>
            <div>
                <div className="realtime-weather-code">{prettyPrintWeatherCode(realtime.weather_code.value)}</div>
                <div className="realtime-feels-like">Feels Like <Temp value={realtime.feels_like.value} />°</div>
            </div>
            <div className="realtime-icon">
                <WeatherIcon value={realtime.weather_code.value} />
            </div>
        </div>
    );
}

export { Realtime };
