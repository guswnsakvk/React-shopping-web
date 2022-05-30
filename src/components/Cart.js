/*eslint-disable*/

import '../style/Cart.css'
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([])

  useEffect(() => {
    cartCopyChange([...props.cart])
    console.log(props.cart)
  }, [])

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
              cartCopy.map((product) => {
                return(
                  <tr>
                    <td className='cart-container-table-body-product'>
                      <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                      <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                      <div className='cart-container-table-body-product-sale'>
                        <p>[{product.product_size}]운동화1</p>
                        <p>20000 → 10000</p>
                      </div>
                    </td>
                    <td>
                      <input className='cart-container-table-body-product-cnt' min={1} type={"number"} value={product.product_cnt}></input>
                    </td>
                    <td>{product.product_price}</td>
                    <td>기본배송</td>
                    <td>
                      <div className='cart-container-table-body-product-order'>주문하기</div>
                      <div className='cart-container-table-product-remove'>삭제하기</div>
                    </td>
                  </tr>
                )
              })
            }
            <tr>
              <td className='cart-container-table-body-product'>
                <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product2.jpg`)})`}}></div>
                <p>[230] 운동화1<br></br>20000 → 10000</p>
              </td>
              <td>
                <input className='cart-container-table-body-product-cnt' min={1} type={"number"}></input>
              </td>
              <td>10000원</td>
              <td>기본배송</td>
              <td>
                <div className='cart-container-table-body-product-order'>주문하기</div>
                <div className='cart-container-table-product-remove'>삭제하기</div>
              </td>
            </tr>
            <tr>
              <td className='cart-container-table-body-product'>
                <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product2.jpg`)})`}}></div>
                <div className='cart-container-table-body-product-sale'>
                  <p>[230]운동화1</p>
                  <p>20000 → 10000</p>
                </div>
              </td>
              <td>
                <input className='cart-container-table-body-product-cnt' min={1} type={"number"}></input>
              </td>
              <td>10000원</td>
              <td>기본배송</td>
              <td>
                <div className='cart-container-table-body-product-order'>주문하기</div>
                <div className='cart-container-table-product-remove'>삭제하기</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart;