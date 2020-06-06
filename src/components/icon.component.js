import React from 'react';
import { getIcon } from "../icons";

function Icon({ value }) {
    return <img src={getIcon(value)} alt={value} title={value} />;
}

export { Icon };
