import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../public/assets/lib/nivo-slider/css/nivo-slider.css';
import '../public/assets/lib/owlcarousel/owl.carousel.css';
import '../public/assets/lib/owlcarousel/owl.transitions.css';
import '../public/assets/lib/animate/animate.min.css';
import '../public/assets/lib/venobox/venobox.css';
import '../public/assets/css/nivo-slider-theme.css';
import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';
import '../public/assets/css/custom.css';
import '../public/assets/css/review.css';
import $ from "jquery";
import '../public/assets/lib/bootstrap/js/bootstrap.min.js';
import '../public/assets/lib/owlcarousel/owl.carousel.min.js';
import '../public/assets/lib/venobox/venobox.min.js';
import '../public/assets/lib/knob/jquery.knob.js';
import '../public/assets/lib/wow/wow.min.js';
import '../public/assets/lib/parallax/parallax.js';
import '../public/assets/lib/easing/easing.min.js';
import '../public/assets/lib/nivo-slider/js/jquery.nivo.slider.js';
import '../public/assets/lib/appear/jquery.appear.js';
import '../public/assets/lib/isotope/isotope.pkgd.min.js';
import Dashboard from './component/pages/Dashboard';

ReactDOM.render(<React.StrictMode><Dashboard /></React.StrictMode>, document.getElementById('root'));
