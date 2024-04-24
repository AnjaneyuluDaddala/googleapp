import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./index.css";
// import './index.css';
// import App from './App';
// import Bike from './Bike/bike';
// import Garage from './react1';
// import Management from './Destructing/dest';
import Store from './CarInfo/test';
import Shooting from './Clickevents/event';
import Ball from './Clickevents/event1';
import App from "./App"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {
  /* <App />
  <Bike/> 
  <Garage/>
  <Management/>*/
  }

  <Store/>
  <Shooting/>
  <Ball/>
  <App />
  </>
);


