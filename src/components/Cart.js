/*eslint-disable*/

import '../style/Cart.css'
import Cart_Pc from './Cart_Pc';
import Cart_Mobile from './Cart_Mobile';
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([])
  let [pageWith, pageWithChange] = useState('pc')
  let [totalPrice, totalPriceChange] = useState(0)
  let [deliveryPrice, deliveryPriceChange] = useState(0)
  let [salePrice, salePriceChange] = useState(0)
  let [paymentPrice, paymentPriceChange] = useState(0)

  useEffect(() => {
    cartCopyChange([...props.cart])
    console.log(props.cart)
    if(window.innerWidth < 768){
      pageWithChange('mobile')
    } else{
      pageWithChange('pc')
    }
    console.log(window.innerWidth)
  }, [])

  window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
      pageWithChange('mobile')
    }
    else if(window.innerWidth > 768){
      pageWithChange('pc')
    }
  })

  function set_cart_value(i, e){
    console.log(e.target.value)
    if(e.target.value === ''){
      e.target.value = 1
    }
    let copy = [...cartCopy]
    copy[i].product_cnt = parseInt(e.target.value)
    console.log(copy)
    cartCopyChange(copy)
    props.cartChang(copy)
  }

  function remove_cart_item(i){
    let copy = [...cartCopy]
    copy.splice(i, 1)
    console.log(copy)
    cartCopyChange(copy)
    props.cartChange(copy)
  }

  function plus_btn(i){
    let copy = [...cartCopy]
    copy[i].product_cnt += 1
    cartCopyChange(copy)
    props.cartChang(copy)
  }

  function minus_btn(i){
    let copy = [...cartCopy]
    if(copy[i].product_cnt !== 1){
      copy[i].product_cnt -= 1
    }
    cartCopyChange(copy)
    props.cartChang(copy)
  }

  function select_cart_product(i){
    let copy = [...cartCopy]
    if(!copy[i].product_select){
      copy[i].product_select = true
      console.log(copy)
      if(copy[i].black_friday = 'O'){
        let total = totalPrice + ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        if(payment >= 30000){
          deliveryPriceChange(0)
        } else{
          deliveryPriceChange(3000)
        }
        totalPriceChange(total)
        salePriceChange(sale)
        paymentPriceChange(payment)
      } else{
        let total = totalPrice + (copy[i].product_price * copy[i].product_cnt)
        let sale = salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        if(payment >= 30000){
          deliveryPriceChange(0)
        } else{
          deliveryPriceChange(3000)
        }
        totalPriceChange(total)
        salePriceChange(sale)
        paymentPriceChange(payment)
      }
    } else{
      copy[i].product_select = false
      console.log(copy)
      if(copy[i].black_friday = 'O'){
        let total = totalPrice - ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        deliveryPriceChange(0)
        totalPriceChange(total)
        salePriceChange(sale)
        paymentPriceChange(payment)
      } else{
        let total = totalPrice - (copy[i].product_price * copy[i].product_cnt)
        let sale = salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        deliveryPriceChange(0)
        totalPriceChange(total)
        salePriceChange(sale)
        paymentPriceChange(payment)
      }
    }
  }

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        {
          pageWith === 'pc'
          ? <Cart_Pc cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang} select_cart_product={select_cart_product}></Cart_Pc>
          : <Cart_Mobile cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang} plus_btn={plus_btn} minus_btn={minus_btn} select_cart_product={select_cart_product}></Cart_Mobile>
        }
        {
          cartCopy.length === 0
          ? <div className="cart-emtpy">장바구니가 비어 있습니다</div>
          : <div className="cart-receipt">
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 상품금액</p>
                <p className="cart-receipt-content-money">{totalPrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 배송비</p>
                <p className="cart-receipt-content-money">{deliveryPrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 할인금액</p>
                <p className="cart-receipt-content-money">{salePrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">결제예정금액</p>
                <p className="cart-receipt-content-money">{paymentPrice + deliveryPrice}원</p>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart;