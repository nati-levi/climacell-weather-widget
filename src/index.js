import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.component'
import './index.css';

const params = new URLSearchParams(window.location.search);

const apikey = params.get('apikey');
const lat = params.get('lat');
const lon = params.get('lon');
const location = params.get('location');

// test values!
    // const apikey = 'sfyng6rOhw9feFrxrUXqN7sLxTS0GjmF';
// const lat = 48.31;
// const lon = -114.23;
//http://localhost:3000/?apikey=sfyng6rOhw9feFrxrUXqN7sLxTS0GjmF&lat=40&lon=-2&title=BOSTON

ReactDOM
    .render(
        <App apikey={apikey} lat={lat} lon={lon} location={location} />,
        document.getElementById('root')
    );
