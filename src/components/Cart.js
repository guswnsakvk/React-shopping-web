/*eslint-disable*/

import '../style/Cart.css'
import Cart_Pc from './Cart_Pc';
import Cart_Mobile from './Cart_Mobile';
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([...props.cart])
  let [pageWith, pageWithChange] = useState('pc')
  // let [totalPrice, totalPriceChange] = useState(0)
  // let [deliveryPrice, deliveryPriceChange] = useState(0)
  // let [salePrice, salePriceChange] = useState(0)
  // let [paymentPrice, paymentPriceChange] = useState(0)

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
    console.log(cartCopy[i].product_cnt)
    if(e.target.value === ''){
      e.target.value = 1
    }
    let copy = [...cartCopy]
    if(copy[i].product_select){
      let error = e.target.value - cartCopy[i].product_cnt
      if(copy[i].black_friday = 'O'){
        let total = props.totalPrice + ((copy[i].product_price * 2) * error)
        let sale = props.salePrice + (copy[i].product_price * error)
        let payment = props.paymentPrice + (copy[i].product_price * error)
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + ((copy[i].product_price * 2) * error)
        let sale = props.salePrice + (copy[i].product_price * error)
        let payment = props.paymentPrice + (copy[i].product_price * error)
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      }
    }
    copy[i].product_cnt = parseInt(e.target.value)
    console.log(copy)
    cartCopyChange(copy)
    props.cartChange(copy)
  }

  function remove_cart_item(i){
    let copy = [...cartCopy]
    if(copy[i].black_friday = 'O'){
      let total = props.totalPrice - ((copy[i].product_price * 2) * copy[i].product_cnt)
      let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
      let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
      if(payment >= 30000){
        props.deliveryPriceChange(0)
      } else{
        props.deliveryPriceChange(3000)
      }
      props.totalPriceChange(total)
      props.salePriceChange(sale)
      props.paymentPriceChange(payment)
    } else{
      let total = props.totalPrice - (copy[i].product_price * copy[i].product_cnt)
      let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
      let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
      if(payment >= 30000){
        props.deliveryPriceChange(0)
      } else{
        props.deliveryPriceChange(3000)
      }
      props.totalPriceChange(total)
      props.salePriceChange(sale)
      props.paymentPriceChange(payment)
    }
    copy.splice(i, 1)
    console.log(copy)
    cartCopyChange(copy)
    props.cartChange(copy)
  }

  function plus_btn(i){
    let copy = [...cartCopy]
    copy[i].product_cnt += 1
    cartCopyChange(copy)
    props.cartChange(copy)
    if(copy[i].product_select){
      if(copy[i].black_friday = 'O'){
        let total = props.totalPrice + (copy[i].product_price * 2)
        let sale = props.salePrice + copy[i].product_price
        let payment = props.paymentPrice + copy[i].product_price
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + copy[i].product_price
        let sale = props.salePrice + copy[i].product_price
        let payment = props.paymentPrice + copy[i].product_price
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      }
    }
  }

  function minus_btn(i){
    let copy = [...cartCopy]

    if(copy[i].product_select & copy[i].product_cnt !== 1){
      if(copy[i].black_friday = 'O'){
        let total = props.totalPrice - (copy[i].product_price * 2)
        let sale = props.salePrice - copy[i].product_price
        let payment = props.paymentPrice - copy[i].product_price
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice - copy[i].product_price
        let sale = props.salePrice - copy[i].product_price
        let payment = props.paymentPrice - copy[i].product_price
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      }
    }
    if(copy[i].product_cnt !== 1){
      copy[i].product_cnt -= 1
    }
    cartCopyChange(copy)
    props.cartChange(copy)
  }

  function select_cart_product(i){
    let copy = [...cartCopy]
    if(!copy[i].product_select){
      copy[i].product_select = true
      console.log(copy)
      if(copy[i].black_friday = 'O'){
        let total = props.totalPrice + ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = props.salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + (copy[i].product_price * copy[i].product_cnt)
        let sale = props.salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        if(payment >= 30000){
          props.deliveryPriceChange(0)
        } else{
          props.deliveryPriceChange(3000)
        }
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      }
    } else{
      copy[i].product_select = false
      console.log(copy)
      if(copy[i].black_friday = 'O'){
        let total = props.totalPrice - ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        props.deliveryPriceChange(0)
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice - (copy[i].product_price * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        props.deliveryPriceChange(0)
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
      }
    }
  }

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        {
          pageWith === 'pc'
          ? <Cart_Pc cart={props.cart} cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} select_cart_product={select_cart_product}></Cart_Pc>
          : <Cart_Mobile cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} plus_btn={plus_btn} minus_btn={minus_btn} select_cart_product={select_cart_product}></Cart_Mobile>
        }
        {
          cartCopy.length === 0
          ? <div className="cart-emtpy">장바구니가 비어 있습니다</div>
          : <div className="cart-receipt">
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 상품금액</p>
                <p className="cart-receipt-content-money">{props.totalPrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 배송비</p>
                <p className="cart-receipt-content-money">{props.deliveryPrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">총 할인금액</p>
                <p className="cart-receipt-content-money">{props.salePrice}원</p>
              </div>
              <div className="cart-receipt-content">
                <p className="cart-receipt-content-title">결제예정금액</p>
                <p className="cart-receipt-content-money">{props.paymentPrice + props.deliveryPrice}원</p>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart;