import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//USER CREATED COMPONENTS:
export {default as TopBar } from './components/TopBar/TopBar';
export {default as Events } from './components/pages/Events';
export {default as Favorites } from './components/pages/Favorites';
export {default as Friends } from './components/pages/Friends';
export {default as Groups } from './components/pages/Groups';
export {default as Home } from './components/pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
