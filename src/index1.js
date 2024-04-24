import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_org';
import reportWebVitals from './reportWebVitals';


const x=5;
let text="Good bye!";
if(x<text){
  text="hello";
}
// const myElemnet=<h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // myElemnet,
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


