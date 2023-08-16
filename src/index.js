import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Card from './components/Card';
import Home from './components/Home';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<App/>} />
      <Route path='/Card' element={<Card/>}/>
    </Routes>
   </Router>
  </React.StrictMode>
);


