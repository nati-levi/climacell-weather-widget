import React from 'react';
import './realtime.component.css';
import { Icon } from "./icon.component";
import { Temp } from "./temp.component";

function Realtime({ realtime }) {
    return (
        <div className="realtime">
            <div className="realtime-temp"><Temp value={realtime.temp.value} /></div>
            <div className="realtime-temp-degrees">°C</div>
            <div>
                <div>{realtime.weather_code.value}</div>
                <div className="">Feels Like <Temp value={realtime.feels_like.value} />°</div>
            </div>
            <div className="realtime-icon">
                <Icon value={realtime.weather_code.value} />
            </div>
        </div>
    );
}

export { Realtime };
