import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import {  Routes, Route} from 'react-router';
import Mobile from './components/Mobile';
import Laptop from './components/Laptop';
import Fashion from './components/Fashion';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Registration from './components/Registration';
import Quote from './components/Quote';
import Idcard from './components/Idcard';


import Calculator from './components/Calculator';
function  App() {

  return (
    <div className="App">
  <Navbar></Navbar>
<Routes>
  <Route path='MOBILE' element={<Mobile/>}/>
  <Route path='LAPTOP' element={<Laptop/>}/>
  <Route path='FASHION' element={<Fashion/>}/>
  <Route path='FEEDBACK' element={<Feedback/>}/>
  <Route path='Login' element={<Login/>}/>
  <Route path='Registration' element={<Registration/>}/>
  <Route path='Quote' element={<Quote/>}/>
  <Route path='Idcard' element={<Idcard/>}/>
  <Route path='Calculator' element={<Calculator/>}/>
</Routes>
  
    </div>
  );
}

export default App;