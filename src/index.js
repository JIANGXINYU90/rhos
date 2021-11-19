// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();


import { Router, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';

const history = createHashHistory();   // hash
const routes = <Router history={history}>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
</Router>;

ReactDOM.render(routes, document.getElementById('root'));