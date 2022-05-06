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
  let [QuickList, QuickListChange] = useState([])

  useEffect(() => {
    let weekly = [[],[],[],[],[],[]]
    let quick = []
    Shoes.forEach((product)=>{
      if(product.best === 'O'){
        if(product.type === '운동화'){
          weekly[0].push(product)
        }
        else if(product.type === '캔버스'){
          weekly[1].push(product)
        }
        else if(product.type === '워킹화'){
          weekly[2].push(product)
        }
        else if(product.type === '부츠'){
          weekly[3].push(product)
        }
        else if(product.type === '구두'){
          weekly[4].push(product)
        }
        else{
          weekly[5].push(product)
        }
      }
    })

    Shoes.forEach((product) => {
      if(product.quick === 'O'){
        quick.push(product)
      }
    })
    WeeklyBestListChange(weekly)
    QuickListChange(quick)
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
      <hr className='app-hrTag'></hr>
      <Home WeeklyBestList={WeeklyBestList} QuickList={QuickList} Shoes={Shoes}></Home>
    </div>
  );
}

export default App;