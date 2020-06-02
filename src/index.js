import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './assets/lib/nivo-slider/css/nivo-slider.css';
import './assets/lib/animate/animate.min.css';
import './assets/css/nivo-slider-theme.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';
import './assets/css/review.css';

import $ from "jquery";

import './assets/lib/bootstrap/js/bootstrap.min.js';
import './assets/lib/knob/jquery.knob.js';
import './assets/lib/nivo-slider/js/jquery.nivo.slider.js';
import './assets/lib/appear/jquery.appear.js';

import Dashboard from './component/pages/Dashboard';

ReactDOM.render(<React.StrictMode><Dashboard /></React.StrictMode>, document.getElementById('root'));
