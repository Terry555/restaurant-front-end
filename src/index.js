import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import App from './App';
import About from './components/About';
import Booking from './components/Booking';
import HoursDirections from './components/HoursDirections';
import Menu from './components/Menu';

//css
import './css/navbar.css';
import './css/footer.css';
import './css/about.css';
import './css/topdishes.css';



ReactDOM.render(

    <Router>
      <React.Fragment>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/booking" component={Booking}/>
        <Route path="/hoursdirections" component={HoursDirections}/>
        <Route path="/menu" component={Menu}/>
      </React.Fragment>
    </Router>,
    document.getElementById('root')

  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
