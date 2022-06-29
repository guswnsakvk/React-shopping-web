/*eslint-disable*/

import '../style/Cart.css'
import Cart_Pc from './Cart_Pc';
import Cart_Mobile from './Cart_Mobile';
import React, { useEffect, useState } from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom'

function Cart(props){
  let [cartCopy, cartCopyChange] = useState([...props.cart])
  // let [pageWith, pageWithChange] = useState('pc')
  // let [selectCnt, selectCntChange] = useState(0)
  // let [allSelect, allSelectChange] = useState(false)
  // let [totalPrice, totalPriceChange] = useState(0)
  // let [deliveryPrice, deliveryPriceChange] = useState(0)
  // let [salePrice, salePriceChange] = useState(0)
  // let [paymentPrice, paymentPriceChange] = useState(0)

  useEffect(() => {
    // cartCopyChange([...props.cart])
    console.log(props.cart)
    if(window.innerWidth < 768){
      props.pageWithChange('mobile')
    } else{
      props.pageWithChange('pc')
    }
    console.log(window.innerWidth)

    if(props.selectCnt < cartCopy.length) props.allSelectChange(false)
  }, [])

  window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
      props.pageWithChange('mobile')
    }
    else if(window.innerWidth > 768){
      props.pageWithChange('pc')
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
    let cart_original = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(cart_original[j].product_id === copy[i].product_id){
        cart_original[j].product_cnt = parseInt(e.target.value)
        break
      }
    }
    console.log(cart_original)
    props.cartChange(cart_original)
  }

  // 상품 삭제했을 때 작동
  function remove_cart_item(i){
    let copy = [...cartCopy]
    let select_num = props.selectCnt
    if(copy[i].product_select){
      select_num -= 1
      props.selectCntChange(select_num)
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
    let cart_original = [...props.cart]
    let place = 0
    for(let j=0;i<props.cart.length;j++){
      console.log(cart_original[j].product_id)
      if(cart_original[j].product_id === copy[i].product_id){
        place = j
        break
      }
    }
    cart_original.splice(place, 1)
    copy.splice(i, 1)
    cartCopyChange(copy)
    console.log(cart_original)
    props.cartChange(cart_original)
    if(copy.length === 0 || select_num === 0){
      props.deliveryPriceChange(0)
    }
    // 선택한 상품 갯수가 전부면 전체선택 true
    // 아니면 false
    if(props.selectCnt < copy.length) props.allSelectChange(false)
    else if(props.selectCnt === copy.length) props.allSelectChange(true)
  }

  // 핸드폰 일때 플러스 버튼 누르면 작동
  function plus_btn(i){
    let copy = [...cartCopy]
    // cart 수정하는 부분
    let cart_original = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(cart_original[j].product_id === copy[i].product_id){
        cart_original[j].product_cnt += 1
        break
      }
    }
    console.log(cart_original)
    props.cartChange(cart_original)
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
    let cart_original = [...props.cart]
    for(let j=0;i<props.cart.length;j++){
      if(cart_original[j].product_id === copy[i].product_id){
        cart_original[j].product_cnt = copy[i].product_cnt
        break
      }
    }
    console.log(cart_original)
    props.cartChange(cart_original)
  }

  // 상품 checkbox 선택시 작동
  function select_cart_product(i){
    let copy = [...cartCopy]
    let cart_original = [...props.cart]
    let select_num = props.selectCnt
    if(!copy[i].product_select){
      copy[i].product_select = true
      select_num += 1
      if(select_num === copy.length){
        props.allSelectChange(true)
      }
      props.selectCntChange(select_num)
      // 선택한 상품 id로 찾아서 true로 바꾸기
      for(let j=0;j<copy.length;j++){
        if(cart_original[j].product_id === copy[i].product_id){
          cart_original[j].product_select = true
          break
        }
      }
      props.cartChange(cart_original)
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
      if(select_num !== copy.length){
        props.allSelectChange(false)
      }
      props.selectCntChange(select_num)
      // 선택한 상품 id로 찾아서 false로 바꾸기
      for(let j=0;j<copy.length;j++){
        if(cart_original[j].product_id === copy[i].product_id){
          cart_original[j].product_select = false
          break
        }
      }
      props.cartChange(cart_original)
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

  // 전체선택 checkbox선택시 작동
  function all_select(){
    let copy = [...cartCopy]
    let cart_original = [...props.cart]
    let total = 0
    let sale = 0
    let payment = 0
    if(props.allSelect){
      props.allSelectChange(false)
      for(let i=0;i<copy.length;i++){
        copy[i].product_select = false
      }

      cartCopyChange(copy)
      for(let i=0;i<cart_original.length;i++){
        cart_original[i].product_select = false
      }
      props.cartChange(cart_original)
      props.selectCntChange(0)

      props.totalPriceChange(0)
      props.salePriceChange(0)
      props.paymentPriceChange(0)
      props.deliveryPriceChange(0)
    } else{
      props.allSelectChange(true)

      for(let i=0;i<copy.length;i++){
        copy[i].product_select = true
      }
      cartCopyChange(copy)

      for(let i=0;i<cart_original.length;i++){
        cart_original[i].product_select = true
      }
      props.cartChange(cart_original)
      props.selectCntChange(copy.length)

      for(let i=0;i<copy.length;i++){
        if(copy[i].black_friday === 'O'){
          total += (copy[i].product_price * 2) * copy[i].product_cnt
          sale += copy[i].product_price * copy[i].product_cnt
          payment += copy[i].product_price * copy[i].product_cnt
        } else{
          total += copy[i].product_price * copy[i].product_cnt
          sale += copy[i].product_price * copy[i].product_cnt
          payment += copy[i].product_price * copy[i].product_cnt
        }
      }
      set_price(total, sale, payment)
    }
  }

  function cart_list_rearrangement(e){
    const sort_way = e.target.value
    console.log(e.target.value)
    if(sort_way === "카트넣기순") cart_list_initialization_order()
    else if(sort_way === "상품명순") cart_list_name_order()
    else if(sort_way === "높은가격순") cart_list_descending_order()
    else cart_list_ascending_order()
  }

  function cart_list_initialization_order(){
    cartCopyChange(props.cart)
  }

  function cart_list_name_order(){
    let copy = [...cartCopy]
    copy.sort(function(a, b){
      if(a.product_name > b.product_name) return 1
      else if(a.product_name === b.product_name) return 0
      else return -1
    })
    cartCopyChange(copy)
    console.log(copy)
  }

  function cart_list_ascending_order(){
    let copy = [...cartCopy]
    copy.sort(function(a, b){
      if(a.product_price > b.product_price) return 1
      else if(a.product_price === b.product_price) return 0
      else return -1
    })
    cartCopyChange(copy)
    console.log(copy)
  }

  function cart_list_descending_order(){
    let copy = [...cartCopy]
    copy.sort(function(a, b){
      if(a.product_price > b.product_price) return -1
      else if(a.product_price === b.product_price) return 0
      else return 1
    })
    cartCopyChange(copy)
    console.log(copy)
  }

  function set_purchase_list(){
    let check_cart_list = []
    for(let i=0;i<cartCopy.length;i++){
      console.log(cartCopy[i].product_select)
      if(cartCopy[i].product_select === true){
        check_cart_list.push(cartCopy[i])
      }
    }
    props.purchaseListChange(check_cart_list)
  }

  function set_purchase_list_one(i){
    let total = 0
    let sale = 0
    let payment = 0
    let copy = [...cartCopy]
    let check_cart_list = copy[i]
    console.log(copy[i])
    console.log(check_cart_list)
    props.purchaseListChange([check_cart_list])

    
    if(check_cart_list.black_friday === 'O'){
      total = (check_cart_list.product_price * 2) * check_cart_list.product_cnt
      sale = check_cart_list.product_price * check_cart_list.product_cnt
      payment = check_cart_list.product_price * check_cart_list.product_cnt
    } else{
      total = check_cart_list.product_price  * check_cart_list.product_cnt
      sale = check_cart_list.product_price * check_cart_list.product_cnt
      payment = check_cart_list.product_price * check_cart_list.product_cnt
    }
    console.log(total, sale, payment)
    set_price(total, sale, payment)
  }

  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
          {
            cartCopy.length === 0
            ? null
            : <div className='cart-sort'>
                <div className='cart-sort-left'>
                  <input className='cart-sort-left-checkbox' onClick={all_select} type={"checkbox"} value={props.allSelect} checked={props.allSelect}></input>
                  <span> 전체선택</span>
                </div>
                <div className='cart-sort-right'>
                  <select name="sort" className='cart-sort-right-select' onChange={(e) => {cart_list_rearrangement(e)}}>
                    <option value={"카트넣기순"}>카트넣기순</option>
                    <option value={"상품명순"}>상품명순</option>
                    <option value={"높은가격순"}>높은가격순</option>
                    <option value={"낮은가격순"}>낮은가격순</option>
                  </select>
                </div>
              </div>
          }
          {/* <div className='cart-sort'>
            <div className='cart-sort-left'>
              <input className='cart-sort-left-checkbox' onClick={all_select} type={"checkbox"} value={props.allSelect} checked={props.allSelect}></input>
              <span> 전체선택</span>
            </div>
            <div className='cart-sort-right'>
              <select name="sort" className='cart-sort-right-select' onChange={(e) => {cart_list_rearrangement(e)}}>
                <option value={"카트넣기순"}>카트넣기순</option>
                <option value={"상품명순"}>상품명순</option>
                <option value={"높은가격순"}>높은가격순</option>
                <option value={"낮은가격순"}>낮은가격순</option>
              </select>
            </div>
          </div> */}
        {
          props.pageWith === 'pc'
          ? <Cart_Pc set_purchase_list_one={set_purchase_list_one} cart={props.cart} cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} select_cart_product={select_cart_product}></Cart_Pc>
          : <Cart_Mobile set_purchase_list_one={set_purchase_list_one} cartCopy={cartCopy} set_cart_value={set_cart_value} remove_cart_item={remove_cart_item} cartChange={props.cartChange} plus_btn={plus_btn} minus_btn={minus_btn} select_cart_product={select_cart_product}></Cart_Mobile>
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
              <div className='purchase-btn' onClick={set_purchase_list}>
                {
                  props.selectCnt !== 0
                  ? <Link to={"/purchase"} className="cart-link-purchase">주문하기</Link>
                  : <span>주문하기</span>
                }
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Cart;