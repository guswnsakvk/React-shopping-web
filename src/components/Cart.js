/*eslint-disable*/

import '../style/Cart.css'
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([])

  useEffect(() => {
    cartCopyChange([...props.cart])
    console.log(props.cart)
  }, [])

  function set_cart_value(i, e){
    console.log(e.target.value)
    let copy = [...cartCopy]
    copy[i].product_cnt = parseInt(e.target.value)
    cartCopyChange(copy)
    props.cartChang(cartCopy)
  }

  function remove_cart_item(i){
    let copy = [...cartCopy]
    copy.splice(i, 1)
    cartCopyChange(copy)
    props.cartChang(cartCopy)
  }

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        <table className='cart-container-table'>
          <thead className='cart-container-table-head'>
            <tr>
              <th className='cart-container-table-head-product-info'>상품 정보</th>
              <th className='cart-container-table-head-product-cnt'>수량</th>
              <th className='cart-container-table-head-product-price'>상품 금액</th>
              <th className='cart-container-table-head-product-delivery'>배송 정보</th>
              <th className='cart-container-table-head-product-order'>주문</th>
            </tr>
          </thead>
          <tbody className='cart-container-table-body'>
            {
              cartCopy.map((product, i) => {
                return(
                  <tr>
                    <td className='cart-container-table-body-product'>
                      <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                      <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                      <div className='cart-container-table-body-product-info'>
                        <p>[{product.product_size}] {product.product_name}</p>
                        {
                          product.black_friday === 'O'
                          ?
                            <p><span className='cart-container-table-body-product-sale'>{product.product_price * 2}</span> → {product.product_price}</p>
                          :
                            <p>{product.product_price}</p>
                        }
                      </div>
                    </td>
                    <td>
                      <input className='cart-container-table-body-product-cnt' onChange={(e) => {set_cart_value(i, e)}} min={1} type={"number"} value={product.product_cnt}></input>
                    </td>
                    <td>{product.product_price}</td>
                    <td>기본배송</td>
                    <td>
                      <div className='cart-container-table-body-product-order'>주문하기</div>
                      <div className='cart-container-table-product-remove' onClick={() => {remove_cart_item(i)}}>삭제하기</div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart;