import React from 'react';
import { getIcon } from "../icons";
import { prettyPrintWeatherCode } from "../utilities";

function WeatherIcon({ value }) {
    const pretty = prettyPrintWeatherCode(value);
    return <img src={getIcon(value)} alt={pretty} title={pretty} />;
}

export { WeatherIcon };
