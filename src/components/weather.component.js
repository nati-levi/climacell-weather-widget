import React from 'react';
import { useTime } from "../hooks/use-time.hook";
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";

function Weather({ title, realtime, hourly }) {
    const time = useTime();

    return (
        <div className="weather">
            <div className="time">{new Date(time).toDateString()}</div>
            <div className="title">{title}</div>
            <Realtime realtime={realtime} />
            <Hourly hourly={hourly} />
        </div>
    )
}

export { Weather };
