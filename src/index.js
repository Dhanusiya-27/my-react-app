import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const age = 13;
var display = <h1 style = {{color:"gray"}}>Hello World</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
