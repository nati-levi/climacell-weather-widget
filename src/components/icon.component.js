import React from 'react';
import { getIcon } from "../icons";

function Icon({ value }) {
    return <img src={getIcon(value)} className="App-logo" alt={value} title={value} />;
}

export { Icon };
