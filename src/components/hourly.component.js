import React from 'react';
import './hourly.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { WeatherIcon } from "./weather-icon.component";

function Hourly({ hourly }) {
    return (
        <div className="hourly">
            {hourly.map(hour => (
                <div className="hour">
                    <div className="hour-time">{formatTime(hour.observation_time.value)}</div>
                    <div className="hour-icon"><WeatherIcon value={hour.weather_code.value} /></div>
                    <div className="hour-temp"><Temp value={hour.temp.value} />°</div>
                </div>
            ))}
        </div>
    );
}

export { Hourly };
