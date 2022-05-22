/*eslint-disable*/

import './App.css';
import { Reset } from 'styled-reset';
import logo from './image/logo.png';
import Home from './components/Home.js';
import React, { useEffect, useState } from 'react';
import ShoesData from './data.js';

import Detail from './components/Detail.js'
import TypeProduct from './components/TypeProduct.js'
import Cart from './components/Cart.js'
import {Link, Route, Routes, NavLink} from 'react-router-dom'

function App() {
  let [Shoes, ShoesChange] = useState(ShoesData)
  let [WeeklyBestList, WeeklyBestListChange] = useState([])
  let [QuickList, QuickListChange] = useState([])
  let [cart, cartChange] = useState([])
  let [typeProductList, typeProductListChange] = useState([])

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

  function set_typeList(e){
    const selected_type = e.target.innerText
    const typeList = []
    if(selected_type === "Black Friday"){
      Shoes.forEach((product) => {
        if(product.BlackFriday === "O"){
          typeList.push(product)
        }
      })
    } else if(selected_type === "Best"){
      Shoes.forEach((product) => {
        if(product.best ==='O'){
          typeList.push(product)
        }
      })
    } else if(selected_type === "당일 배송"){
        Shoes.forEach((product) => {
          if(product.quick === 'O'){
            typeList.push(product)
          }
        })
    } else{
        Shoes.forEach((product) => {
          if(product.type === selected_type){
            typeList.push(product)
          }
        })
    }
    typeProductListChange(typeList)
    console.log(typeList)
    console.log(typeProductList)
  }

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
          <NavLink to={"/"}>
            <img src={logo} alt="#" className='logo'></img>
          </NavLink>
        </div>
      </header>
      <div className='mobile-menu'>
      <div className='menus'>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Black_Friday"} className="link">Black Friday</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Best_Product"} className="link">Best</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Quick_Product"} className="link">당일 배송</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/운동화"} className="link">운동화</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/캔버스"} className="link">캔버스</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/워킹화"} className="link">워킹화</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/부츠"} className="link">부츠</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/구두"} className="link">구두</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/샌들"} className="link">샌들</Link></li>
        </ul>
      </div>
      </div>
      <hr className='app-hrTag'></hr>
      <div>
        <Routes>
          <Route exact path="/" element={<Home WeeklyBestList={WeeklyBestList} QuickList={QuickList}></Home>}>
          </Route>
          <Route path="/shoes_type/:id" element={<TypeProduct typeProductList={typeProductList}></TypeProduct>}>
          </Route>
          <Route path="/detail/:id" element={<Detail Shoes={Shoes} cart={cart} cartChange={cartChange}></Detail>}>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;