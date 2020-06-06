import React from 'react';
import './hourly.component.css';
import { Icon } from "./icon.component";
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";

function Hourly({ hourly }) {
    return (
        <div className="hourly">
            {hourly.map(hour => (
                <div className="hour">
                    <div className="">
                        {formatTime(hour.observation_time.value)}

                    </div>
                    <div className=""><Icon value={hour.weather_code.value} /></div>
                    <div className=""><Temp value={hour.temp.value}/></div>
                </div>
            ))}
        </div>
    );
}

export { Hourly };
