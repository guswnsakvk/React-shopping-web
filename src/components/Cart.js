/*eslint-disable*/

import '../style/Cart.css'
import Cart_Pc from './Cart_Pc';
import Cart_Mobile from './Cart_Mobile';
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([])
  let [pageWith, pageWithChange] = useState('pc')

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

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        {
          pageWith === 'pc'
          ? <Cart_Pc cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang}></Cart_Pc>
          : <Cart_Mobile cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang} plus_btn={plus_btn} minus_btn={minus_btn}></Cart_Mobile>
        }
        {/* <Cart_Pc cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang}></Cart_Pc>
        <Cart_Mobile cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChang} plus_btn={plus_btn} minus_btn={minus_btn}></Cart_Mobile> */}
      </div>
    </div>
  )
}

export default Cart;