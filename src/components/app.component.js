import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useHourly, useRealtime } from "../hooks/use-realtime.hook";
import { useTime } from "../hooks/use-time.hook";

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Error occurred.</div>;
}

function App({ apikey, lat, lon, title }) {
    const [realtimeResponse, loadingRealtime, realtimeHasError] = useRealtime({ apikey, lat, lon });
    const [hourlyResponse, loadingHourly, hourlyHasError] = useHourly({ apikey, lat, lon });
    const time = useTime();

    const loading = loadingRealtime || loadingHourly;
    const hasError = realtimeHasError || hourlyHasError;

    return (
        <div className="app-root">
            {loading ?
                <Loading /> :
                (hasError ?
                        <Error /> :
                        <div>
                            <div className="powered">powered by climacell</div>
                            <div className="time">{new Date(time).toDateString()}</div>
                            <div className="title">{title}</div>
                            <Realtime realtime={realtimeResponse} />
                            <div className="divider" />
                            <Hourly hourly={hourlyResponse} />
                        </div>
                )}
        </div>
    );
}

export { App };
