import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useHourly, useRealtime } from "../hooks/use-realtime.hook";
import { useTime } from "../hooks/use-time.hook";
import ClimacellIcon from '../icons/climacell-icon.svg';
import PinIcon from '../icons/pin.svg';

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Oops! Something went wrong :(</div>;
}

function App({ apikey, lat, lon, location }) {
    const [realtimeResponse, loadingRealtime, realtimeHasError] = useRealtime({ apikey, lat, lon });
    const [hourlyResponse, loadingHourly, hourlyHasError] = useHourly({ apikey, lat, lon });
    const time = useTime();

    const loading = loadingRealtime || loadingHourly;
    const hasError = realtimeHasError || hourlyHasError;

    return (
        <div className="app-root">
            {loading ? <Loading /> : (hasError ? <Error /> :
                    <div>
                        <div className="powered">
                            <a className="powered-link" target="_blank" href="https://www.climacell.co">
                                Powered by ClimaCell
                                <img className="icon powered-icon"
                                     src={ClimacellIcon}
                                     alt="Powered by ClimaCell"
                                     title="Powered by ClimaCell" />
                            </a>
                        </div>
                        <div className="time">{new Date(time).toDateString()}</div>
                        <div className="location">
                            <img className="icon icon-pin"
                                 src={PinIcon}
                                 alt={location}
                                 title={location} />
                            {location}
                        </div>
                        <Realtime realtime={realtimeResponse} />
                        <div className="divider" />
                        <Hourly hourly={hourlyResponse} />
                    </div>
            )}
        </div>
    );
}

export { App };
