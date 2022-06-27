/*eslint-disable*/

import "../style/Cart_Pc.css"
import React, { useState } from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom'

function Cart_Pc(props){
  let today = new Date()
  let tomorrow = new Date(today.setDate(today.getDate() + 1))
  let month = tomorrow.getMonth() + 1
  let date = tomorrow.getDate()
  let day = tomorrow.getDay()
  let test1 = document.querySelectorAll(".cart-pc-container-table-body-product-checkBox")
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  return(
    <>
      <table className='cart-pc-container-table'>
        <thead className='cart-pc-container-table-head'>
          <tr>
            <th className='cart-pc-container-table-head-product-info'>상품 정보</th>
            <th className='cart-pc-container-table-head-product-cnt'>수량</th>
            <th className='cart-pc-container-table-head-product-price'>상품 금액</th>
            <th className='cart-pc-container-table-head-product-delivery'>배송 정보</th>
            <th className='cart-pc-container-table-head-product-order'>주문</th>
          </tr>
        </thead>
        <tbody className='cart-pc-container-table-body'>
          {
            props.cartCopy.map((product, i) => {
              return(
                <tr>
                  <td className='cart-pc-container-table-body-product'>
                    <input onClick={() => {props.select_cart_product(i)}} className='cart-pc-container-table-body-product-checkBox' type={"checkbox"} checked={product.product_select} value={product.product_select}></input>
                    <div className='cart-pc-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                    <div className='cart-pc-container-table-body-product-info'>
                      <p>[{product.product_size}] {product.product_name}</p>
                      {
                        product.black_friday === 'O'
                        ? <p><span className='cart-pc-container-table-body-product-sale'>{product.product_price * 2}</span> → {product.product_price}</p>
                        : <p>{product.product_price}</p>
                      }
                    </div>
                  </td>
                  <td>
                    <input className='cart-pc-container-table-body-product-cnt' onChange={(e) => {props.set_cart_value(i, e)}} min={1} type={"number"} value={product.product_cnt}></input>
                  </td>
                  <td>{product.product_price}</td>
                  {
                    product.product_quick === 'O'
                    ? <td>
                        <p>내일</p>
                        <p className="cart-pc-container-table-body-date">({month}/{date}, {week[day]})</p>
                        <p className="cart-pc-container-table-body-date">도착예정</p>
                      </td>
                    : <td>기본배송</td>
                  }
                  <td>
                    <Link to={"/purchase"} className="cart-pc-link-purchase">
                      <div className='cart-pc-container-table-body-product-order' onClick={() => {props.set_purchase_list_one(i)}}>주문하기</div>
                    </Link>
                    <div className='cart-pc-container-table-product-remove' onClick={() => {props.remove_cart_item(i)}}>삭제하기</div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Cart_Pc