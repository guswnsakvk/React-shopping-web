/*eslint-disable*/

import '../style/Cart.css'
import Cart_Pc from './Cart_Pc';
import Cart_Mobile from './Cart_Mobile';
import React, { useEffect, useState } from 'react';

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([...props.cart])
  let [pageWith, pageWithChange] = useState('pc')
  let [selectCnt, selectCntChange] = useState(0)
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

  // 상품의 갯수가 바뀔 때 작동
  function set_cart_value(i, e){
    console.log(e.target.value)
    console.log(cartCopy[i].product_cnt)
    if(e.target.value === ''){
      e.target.value = 1
    }
    let copy = [...cartCopy]
    if(copy[i].product_select){
      let error = e.target.value - cartCopy[i].product_cnt
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice + ((copy[i].product_price * 2) * error)
        let sale = props.salePrice + (copy[i].product_price * error)
        let payment = props.paymentPrice + (copy[i].product_price * error)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + (copy[i].product_price * error)
        let sale = props.salePrice + (copy[i].product_price * error)
        let payment = props.paymentPrice + (copy[i].product_price * error)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      }
    }
    copy[i].product_cnt = parseInt(e.target.value)
    console.log(copy)
    console.log(copy[i].product_id)
    cartCopyChange(copy)
    // cart 수정하는 부분
    let list = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(list[j].product_id === copy[i].product_id){
        list[j].product_cnt = parseInt(e.target.value)
        break
      }
    }
    console.log(list)
    props.cartChange(list)
  }

  // 상품 삭제했을 때 작동
  function remove_cart_item(i){
    let copy = [...cartCopy]
    let select_num = selectCnt
    if(copy[i].product_select){
      select_num -= 1
      selectCntChange(select_num)
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice - ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice - (copy[i].product_price * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      }
    }
    // cart 수정하는 부분
    let list = [...props.cart]
    let place = 0
    for(let j=0;i<props.cart.length;j++){
      console.log(list[j].product_id)
      if(list[j].product_id === copy[i].product_id){
        place = j
        break
      }
    }
    list.splice(place, 1)
    copy.splice(i, 1)
    cartCopyChange(copy)
    console.log(list)
    props.cartChange(list)
    if(copy.length === 0){
      props.deliveryPriceChange(0)
    }
  }

  // 핸드폰 일때 플러스 버튼 누르면 작동
  function plus_btn(i){
    let copy = [...cartCopy]
    // cart 수정하는 부분
    let list = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(list[j].product_id === copy[i].product_id){
        list[j].product_cnt += 1
        break
      }
    }
    console.log(list)
    props.cartChange(list)
    if(copy[i].product_select){
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice + (copy[i].product_price * 2)
        let sale = props.salePrice + copy[i].product_price
        let payment = props.paymentPrice + copy[i].product_price
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + copy[i].product_price
        let sale = props.salePrice + copy[i].product_price
        let payment = props.paymentPrice + copy[i].product_price
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      }
    }
  }

  // 핸드폰 일때 마이너스 버튼 누르면 작동
  function minus_btn(i){
    let copy = [...cartCopy]
    if(copy[i].product_select & copy[i].product_cnt !== 1){
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice - (copy[i].product_price * 2)
        let sale = props.salePrice - copy[i].product_price
        let payment = props.paymentPrice - copy[i].product_price
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice - copy[i].product_price
        let sale = props.salePrice - copy[i].product_price
        let payment = props.paymentPrice - copy[i].product_price
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      }
    }
    if(copy[i].product_cnt !== 1){
      copy[i].product_cnt -= 1
    }
    cartCopyChange(copy)
    // cart 수정하는 부분
    let list = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(list[j].product_id === copy[i].product_id){
        list[j].product_cnt = copy[i].product_cnt
        break
      }
    }
    console.log(list)
    props.cartChange(list)
  }

  // 상품 checkbox 선택시 작동
  function select_cart_product(i){
    let copy = [...cartCopy]
    let list = [...props.cart]
    let select_num = selectCnt
    if(!copy[i].product_select){
      copy[i].product_select = true
      select_num += 1
      selectCntChange(select_num)
      // 선택한 상품 id로 찾아서 true로 바꾸기
      for(let j=0;j<copy.length;j++){
        if(list[j].product_id === copy[i].product_id){
          list[j].product_select = true
          break
        }
      }
      props.cartChange(list)
      console.log(copy)
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice + ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = props.salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      } else{
        let total = props.totalPrice + (copy[i].product_price * copy[i].product_cnt)
        let sale = props.salePrice + (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice + (copy[i].product_price * copy[i].product_cnt)
        set_price(total, sale, payment)
        // if(payment >= 30000){
        //   props.deliveryPriceChange(0)
        // } else{
        //   props.deliveryPriceChange(3000)
        // }
        // props.totalPriceChange(total)
        // props.salePriceChange(sale)
        // props.paymentPriceChange(payment)
      }
    } else{
      copy[i].product_select = false
      select_num -= 1
      selectCntChange(select_num)
      // 선택한 상품 id로 찾아서 false로 바꾸기
      for(let j=0;j<copy.length;j++){
        if(list[j].product_id === copy[i].product_id){
          list[j].product_select = false
          break
        }
      }
      props.cartChange(list)
      console.log(copy)
      // let select_boolean = false
      if(copy[i].black_friday === 'O'){
        let total = props.totalPrice - ((copy[i].product_price * 2) * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
        // for(let j=0;j<copy.length;j++){
        //   if(copy[j].product_select){
        //     select_boolean = true
        //     break
        //   }
        // }
        // 선택한 상품의 개수가 0개이면 배송비 0원
        // 아니면 가격에 따라 배송비 책정
        if(select_num !== 0){
          if(payment >= 30000){
            props.deliveryPriceChange(0)
          } else{
            props.deliveryPriceChange(3000)
          }
        } else{
          props.deliveryPriceChange(0)
        }
      } else{
        let total = props.totalPrice - (copy[i].product_price * copy[i].product_cnt)
        let sale = props.salePrice - (copy[i].product_price * copy[i].product_cnt)
        let payment = props.paymentPrice - (copy[i].product_price * copy[i].product_cnt)
        props.totalPriceChange(total)
        props.salePriceChange(sale)
        props.paymentPriceChange(payment)
        // for(let j=0;j<copy.length;j++){
        //   if(copy[j].product_select){
        //     select_boolean = true
        //     break
        //   }
        // }
        // 선택한 상품의 개수가 0개이면 배송비 0원
        // 아니면 가격에 따라 배송비 책정
        if(select_num !== 0){
          if(payment >= 30000){
            props.deliveryPriceChange(0)
          } else{
            props.deliveryPriceChange(3000)
          }
        } else{
          props.deliveryPriceChange(0)
        }
      }
    }
    console.log(select_num)
    console.log(props.cart)
  }

  // 결제할 가격에 따라 배송비 책정
  function set_price(total_price, sale_price, payment_price){
    if(payment_price >= 30000){
      props.deliveryPriceChange(0)
    } else{
      props.deliveryPriceChange(3000)
    }
    props.totalPriceChange(total_price)
    props.salePriceChange(sale_price)
    props.paymentPriceChange(payment_price)
  }

  function all_select(){
    let copy = [...cartCopy]
  }

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
          <div className='cart-sort'>
            <div className='cart-sort-left'>
              <input className='cart-sort-left-checkbox' onClick={all_select} type={"checkbox"}></input>
              <span> 전체선택</span>
            </div>
            <div className='cart-sort-right'>
              <select name="sort" className='cart-sort-right-select'>
                <option>카트넣기순</option>
                <option>상품명순</option>
                <option>높은가격순</option>
                <option>낮은가격순</option>
              </select>
            </div>
          </div>
        
        {
          pageWith === 'pc'
          ? <Cart_Pc cart={props.cart} cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} select_cart_product={select_cart_product}></Cart_Pc>
          : <Cart_Mobile cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} plus_btn={plus_btn} minus_btn={minus_btn} select_cart_product={select_cart_product}></Cart_Mobile>
        }
        {
          cartCopy.length === 0
          ? <div className="cart-emtpy">장바구니가 비어 있습니다</div>
          : <>
              <div className="cart-receipt">
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
              <div className='purchase-btn'>주문하기</div>
            </>
        }
      </div>
    </div>
  )
}

export default Cart;