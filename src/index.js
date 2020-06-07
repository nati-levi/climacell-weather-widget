import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.component'
import './index.css';

const params = new URLSearchParams(window.location.search);

const apikey = params.get('apikey');
const lat = params.get('lat');
const lon = params.get('lon');
const location = params.get('location');

ReactDOM
    .render(
        <App apikey={apikey} lat={lat} lon={lon} location={location} />,
        document.getElementById('root')
    );
