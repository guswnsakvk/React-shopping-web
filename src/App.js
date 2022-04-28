/*eslint-disable*/

import './App.css';
import { Reset } from 'styled-reset';
import logo from './image/logo.png';
import Home from './components/Home.js';
import React, { useEffect, useState } from 'react';
import ShoesData from './data.js';

function App() {
  let [Shoes, ShoesChange] = useState(ShoesData)
  let [WeeklyBestList, WeeklyBestListChange] = useState([])

  useEffect(() => {
    let copy = [[],[],[],[],[],[]]
    Shoes.forEach((product)=>{
      if(product.best === 'O'){
        if(product.type === '운동화'){
          copy[0].push(product)
        }
        else if(product.type === '캔버스'){
          copy[1].push(product)
        }
        else if(product.type === '워킹화'){
          copy[2].push(product)
        }
        else if(product.type === '부츠'){
          copy[3].push(product)
        }
        else if(product.type === '구두'){
          copy[4].push(product)
        }
        else{
          copy[5].push(product)
        }
      }
    })
    console.log(copy)
    WeeklyBestListChange(copy)
  }, [])

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
        </ul>
        <ul>
          <li>Best</li>
        </ul>
        <ul>
          <li>당일 배송</li>
        </ul>
        <ul>
          <li>운동화</li>
        </ul>
        <ul>
          <li>캔버스</li>
        </ul>
        <ul>
          <li>워킹화</li>
        </ul>
        <ul>
          <li>부츠</li>
        </ul>
        <ul>
          <li>구두</li>
        </ul>
        <ul>
          <li>샌들</li>
        </ul>
      </div>
      <Home WeeklyBestList={WeeklyBestList}></Home>
    </div>
  );
}

export default App;