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
import Purchase from './components/Purchase';
import {Link, Route, Routes, NavLink} from 'react-router-dom'

function App() {
  let [Shoes, ShoesChange] = useState(ShoesData)
  let [WeeklyBestList, WeeklyBestListChange] = useState([])
  let [QuickList, QuickListChange] = useState([])
  let [cart, cartChange] = useState([])
  let [typeProductList, typeProductListChange] = useState([])
  let [totalPrice, totalPriceChange] = useState(0)
  let [deliveryPrice, deliveryPriceChange] = useState(0)
  let [salePrice, salePriceChange] = useState(0)
  let [paymentPrice, paymentPriceChange] = useState(0)
  let [selectCnt, selectCntChange] = useState(0)
  let [allSelect, allSelectChange] = useState(false)
  let [purchaseList, purchaseListChange] = useState([])
  let [pageWith, pageWithChange] = useState('pc')

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

    // 결제할 가격에 따라 배송비 책정
    // 결제할 가격 저장
    function set_price(total_price, sale_price, payment_price){
      if(payment_price >= 30000){
        deliveryPriceChange(0)
      } else{
        deliveryPriceChange(3000)
      }
      totalPriceChange(total_price)
      salePriceChange(sale_price)
      paymentPriceChange(payment_price)
    }

  return (
    <div>
      <Reset />
      <header className='header'>
        <div className='headerTop'>
          <span className='headerTop-myMenu'>Login</span>
          <span className='headerTop-myMenu headerTop-myMenu-margin'>Join</span>
          <span className='headerTop-myMenu headerTop-myMenu-margin'><Link className='link-to-cart' to={"/cart"}>Cart</Link></span>
          {/* <ul className='myMenu'>
            <li className='myMenu-margin'>Login</li>
            <li className='myMenu-margin'>Join</li>
            <li><Link to={"/cart"}>Cart</Link></li>
          </ul> */}
        </div>
        <div className='logo-background'>
          <Link to={"/"}>
            <div style={{backgroundImage: `url(${logo})`}} className='logo'></div>
          </Link>
        </div>
      </header>
      <div className='mobile-menu'>
      <div className='menus'>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Black_Friday"} className="link-to-products">Black Friday</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Best_Product"} className="link-to-products">Best</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/Quick_Product"} className="link-to-products">당일 배송</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/운동화"} className="link-to-products">운동화</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/캔버스"} className="link-to-products">캔버스</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/워킹화"} className="link-to-products">워킹화</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/부츠"} className="link-to-products">부츠</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/구두"} className="link-to-products">구두</Link></li>
        </ul>
        <ul>
          <li onClick={set_typeList}><Link to={"/shoes_type/샌들"} className="link-to-products">샌들</Link></li>
        </ul>
      </div>
      </div>
      <hr className='app-hrTag'></hr>
      <div>
        <Routes>
          <Route exact path="/" element={<Home WeeklyBestList={WeeklyBestList} QuickList={QuickList}></Home>}></Route>
          <Route path="/shoes_type/:id" element={<TypeProduct typeProductList={typeProductList}></TypeProduct>}></Route>
          <Route 
            path="/detail/:id" 
            element={<Detail 
              Shoes={Shoes} 
              cart={cart} 
              cartChange={cartChange}
              totalPriceChange={totalPriceChange}
              deliveryPriceChange={deliveryPriceChange}
              salePriceChange={salePriceChange}
              paymentPriceChange={paymentPriceChange}
              purchaseListChange={purchaseListChange}
              set_price={set_price}>
            </Detail>}>
          </Route>
          <Route 
            path="/cart" 
            element={<Cart 
              pageWith={pageWith} 
              pageWithChange={pageWithChange} 
              purchaseListChange={purchaseListChange} 
              selectCnt={selectCnt} 
              selectCntChange={selectCntChange} 
              allSelect={allSelect} 
              allSelectChange={allSelectChange} 
              cart={cart} 
              cartChange={cartChange} 
              totalPrice={totalPrice} 
              totalPriceChange={totalPriceChange} 
              deliveryPrice={deliveryPrice} 
              deliveryPriceChange={deliveryPriceChange} 
              salePrice={salePrice} 
              salePriceChange={salePriceChange} 
              paymentPrice={paymentPrice} 
              paymentPriceChange={paymentPriceChange}
              set_price={set_price}>
              </Cart>}>
          </Route>
          <Route 
            path="/purchase" 
            element={<Purchase 
              pageWith={pageWith} 
              pageWithChange={pageWithChange} 
              purchaseList={purchaseList} 
              purchaseListChange={purchaseListChange} 
              totalPrice={totalPrice} 
              totalPriceChange={totalPriceChange} 
              deliveryPrice={deliveryPrice} 
              deliveryPriceChange={deliveryPriceChange} 
              salePrice={salePrice} 
              salePriceChange={salePriceChange} 
              paymentPrice={paymentPrice} 
              paymentPriceChange={paymentPriceChange}
              cart={cart}
              cartChange={cartChange}>
              </Purchase>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;