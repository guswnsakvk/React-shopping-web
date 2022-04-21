/*eslint-disable*/

import './App.css';
import { Reset } from 'styled-reset';
import logo from './image/logo.png';
import Home from './components/Home.js';
import React, { useState } from 'react';

function App() {
  let [WeeklyBestSelected, WeeklyBestSelectedChange] = useState('운동화')

  return (
    <div>
      <Reset />
      <header className='header'>
        <div className='headerTop'>
          <ul className='myMenu'>
            <li className='myMenu-margin'>Login</li>
            <li className='myMenu-margin'>Join</li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="#" className='logo'></img>
        </div>
      </header>
      <div className='menus'>
        <ul>
          <li>Black Friday</li>
          <li>Best</li>
          <li>당일 배송</li>
          <li>운동화</li>
          <li>캔버스</li>
          <li>워킹화</li>
          <li>슬립온 슈즈</li>
          <li>로퍼</li>
          <li>부츠</li>
          <li>구두</li>
          <li>샌들</li>
        </ul>
      </div>
      <Home WeeklyBestSelected={WeeklyBestSelected} WeeklyBestSelectedChange={WeeklyBestSelectedChange}></Home>
    </div>
  );
}

export default App;