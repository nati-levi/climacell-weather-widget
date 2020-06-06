import React from 'react';
import './App.css';
import { Weather } from "./weather.component";
import { useHourly, useRealtime } from "../hooks/use-realtime.hook";

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Error occurred.</div>;
}

function App({ apikey, lat, lon, title }) {
    const [realtimeResponse, loadingRealtime, realtimeHasError] = useRealtime({ apikey, lat, lon });
    const [hourlyResponse, loadingHourly, hourlyHasError] = useHourly({ apikey, lat, lon });

    const loading = loadingRealtime || loadingHourly;
    const hasError = realtimeHasError || hourlyHasError;

    return (
        <div className="app-root">
            {loading ? <Loading /> : (hasError ? <Error /> :
                <Weather title={title} realtime={realtimeResponse} hourly={hourlyResponse} />)}
        </div>
    );
}

export default App;
