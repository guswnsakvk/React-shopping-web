/*eslint-disable*/

import '../style/Detail.css'
import {useParams} from 'react-router-dom'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Detail(props){
  let {id} = useParams()
  let findProduct = props.Shoes.find(function(product){
    return product.id == id
  })
  let [cnt, cntChange] = useState(0)
  let [select, selectChange] = useState([])
  let [sum, sumChange] = useState(0)
  let [pushBtn, pushBtnChange] = useState(false) // 알람창이 떠있는 상태를 확인하는 변수
  let [selectBtn, selectBtnChange] = useState("")

  // 신발 사이즈를 선택시 작동
  function select_size(e){
    // select태그에서 선택한 값이 ""가 아닐경우 작동
    if(e.target.value !== ""){
      let check = false
      let copy = [...select]
      let data = {product_size : e.target.value, product_cnt : 1, product_id: id, product_name: findProduct.name, product_quick: findProduct.quick, product_select: false}
      for(let i=0;i<select.length;i++){
        if(select[i].product_size === e.target.value){
          check = true
          console.log(check)
          break
        }
      }
      // 사이즈를 중복선택한 경우 추가되는 테이블을 막는 기능
      if(!check){
        let product_sum = sum
        if(findProduct.BlackFriday === 'O'){
          product_sum += findProduct.price / 2
          data.product_price = findProduct.price / 2
          data.black_friday = 'O'
          sumChange(product_sum)
        } else{
          product_sum += findProduct.price
          data.product_price = findProduct.price
          data.black_friday = 'X'
          sumChange(product_sum)
        }
        let product_count = cnt
        product_count += 1
        cntChange(product_count)
        copy.push(data)
        console.log(copy)
        selectChange(copy)
      }
    }
  }

  // 선택한 사이즈 신발 갯수 변경하는 기능
  function set_product_cnt(index, e){
    let copy = [...select]
    let product_count = cnt
    let product_sum = sum

    if(e.target.value === ''){
      e.target.value = 1
    }

    if(findProduct.BlackFriday === 'O'){
      product_sum -= copy[index].product_cnt * (findProduct.price / 2)
      sumChange(product_sum)
    } else{
      product_sum -= copy[index].product_cnt * findProduct.price
      sumChange(product_sum)
    }
    product_count += parseInt(e.target.value) - copy[index].product_cnt
    cntChange(product_count)
    copy[index].product_cnt = parseInt(e.target.value)
    selectChange(copy)

    if(findProduct.BlackFriday === 'O'){
      product_sum += copy[index].product_cnt * (findProduct.price / 2)
      sumChange(product_sum)
    } else{
      product_sum += copy[index].product_cnt * findProduct.price
      sumChange(product_sum)
    }
    console.log(select)
  }

  // 선택한 사이즈 삭제하는 기능
  function delete_select(index){
    let copy = [...select]
    let product_count = cnt
    let product_sum = sum
    if(findProduct.BlackFriday === 'O'){
      product_sum -= copy[index].product_cnt * (findProduct.price / 2)
      sumChange(product_sum)
    } else{
      product_sum -= copy[index].product_cnt * findProduct.price
      sumChange(product_sum)
    }
    product_count -= copy[index].product_cnt
    copy.splice(index, 1)
    selectChange(copy)
    cntChange(product_count)
  }

  // 선택한 사이즈 제품 정보를 카트에 넣는 기능
  function push_data_to_cart(type){
    if(!pushBtn){
      const select_List = document.querySelector(".container-item-info-detail-td-select")
      let copy = [...props.cart]
      let check = []
      for(let i=0;i<select.length;i++){
        check.push(-1)
      }
      for(let i=0;i<select.length;i++){
        for(let j=0;j<copy.length;j++){
          if(select[i].product_id === copy[j].product_id && select[i].product_size === copy[j].product_size){
            check[i] = j
            break
          }
        }
      }
      check.map((duplicate, index) => {
        if(duplicate !== -1){
          copy[duplicate].product_cnt += select[index].product_cnt
        } else{
          copy.unshift(select[index])
        }
      })
      selectChange([])
      sumChange(0)
      cntChange(0)
      console.log(check)
      console.log(copy)
      props.cartChange(copy)
      alert_box_open(type)
      selectBtnChange(type)
      select_List.children[0].selected = true
      pushBtnChange(true)
    }
  }

  // 알림창을 여는 기능
  function alert_box_open(type){
    let alert_box = null
    // 사이즈를 선택한 경우
    if(type === "cart"){
      alert_box = document.querySelector(".to-cart-alert-box-container")
    } else if(type === "noSelect"){ // 아무것도 선택하지 않았을 경우 경고 알림
      alert_box = document.querySelector(".select-size-alert_box-container")
    }
    const select_size_list = document.querySelector(".container-item-info-detail-td-select")
    select_size_list.disabled = true
    alert_box.style.display = "block"
  }

  // 알림창을 닫는 기능
  function alert_box_close(){
    let alert_box = null
    // 사이즈를 선택하고 알림창을 나왔을 경우
    if(selectBtn === "cart"){
      alert_box = document.querySelector(".to-cart-alert-box-container")
    } else if(selectBtn === "noSelect"){ // 아무것도 선택을 안하고 알림창이 나왔을 경우
      alert_box = document.querySelector(".select-size-alert_box-container")
    }
    const select_size_list = document.querySelector(".container-item-info-detail-td-select")
    select_size_list.disabled = false
    alert_box.style.display = "none"
    pushBtnChange(false)
  }

  function select_box_focus(){
    const select_box = document.querySelector(".container-item-info-detail-td-select")
    // select box 사이즈를 조정하여 스크롤 바 생기게 함
    select_box.size = 5
  }

  function select_box_onblur(){
    const select_box = document.querySelector(".container-item-info-detail-td-select")
    select_box.size = 1
  }

  function select_box_input(){
    const select_box = document.querySelector(".container-item-info-detail-td-select")
    select_box.size = 1
    select_box.blur()
  }

  // BUY NOW를 눌렀을 경우 작동
  function buy_now(){
    props.purchaseListChange(select)
    console.log(select.length)
    let total = 0
    let sale = 0
    let payment = 0

    for(let i=0;i<select.length;i++){
      if(select[i].black_friday === 'O'){
        total += (select[i].product_price * 2) * select[i].product_cnt
        sale += select[i].product_price * select[i].product_cnt
        payment += select[i].product_price * select[i].product_cnt
      } else{
        total += select[i].product_price  * select[i].product_cnt
        sale += select[i].product_price * select[i].product_cnt
        payment += select[i].product_price * select[i].product_cnt
      }
    }

    console.log(total, sale, payment)
    props.set_price(total, sale, payment)
  }

  return(
    <div className='detail-background'>
      <div className='detail-container'>
        <div className='container-item'>
          <div className='container-item-img' style={{backgroundImage: `url(${require(`../image/product${findProduct.id + 1}.jpg`)})`}}></div>
          <div className='container-item-info'>
            <p className='container-item-info-title'>{findProduct.name}</p>
            <hr className='detail-hrTag'></hr>
            <div className='container-item-info-detail'>
              <table>
                <thead>
                  <tr>
                    <td className='container-item-info-detail-td-title'>신발 종류</td>
                    <td>{findProduct.type}</td>
                  </tr>
                </thead>
                {
                  findProduct.BlackFriday === 'O'
                  ? 
                  <>
                    <tr>
                      <td className='container-item-info-detail-td-left'>판매가</td>
                      <td className='before-sale'>{findProduct.price}</td>
                    </tr>
                    <tr>
                      <td className='container-item-info-detail-td-left'>할인가</td>
                      <td>{findProduct.price / 2}</td>
                    </tr>
                  </>
                  :
                  <>
                    <tr>
                      <td className='container-item-info-detail-td-left'>판매가</td>
                      <td>{findProduct.price}</td>
                    </tr>
                  </>

                }
                <tbody>
                  <tr>
                    <td className='container-item-info-detail-td-left'>사이즈</td>
                    <td>
                      <select onChange={select_size} name='size' onInput={select_box_input} onFocus={select_box_focus} onBlur={select_box_onblur} className='container-item-info-detail-td-select'>
                        <option value={""}>- [필수] 사이즈 선택 -</option>
                        {
                          findProduct.size.map((shoes_size) => {
                            return(
                              <option value={shoes_size} key={shoes_size}>{shoes_size}</option>
                            )
                          })
                        }
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className='detail-selected-hrTag'></hr>
            {
              select.map((selected, i) => {
                return(
                  <>
                    <table className='container-item-info-detail-selected' key={i}>
                      <tr>
                        <td className='container-item-info-detail-selected-title'>
                          <p>{findProduct.name}</p>
                          <p>{selected.product_size}</p>
                        </td>
                        <td className='container-item-info-detail-td-selected-cnt'>
                          <input onChange={(e) => {set_product_cnt(i, e)}} type={"number"} min={1} value={selected.product_cnt}></input>
                          <span onClick={() => {delete_select(i)}}>X</span>
                        </td>
                        {
                          findProduct.BlackFriday === 'O'
                          ? 
                          <td className='container-item-info-detail-td-selected-price'>
                            {(findProduct.price / 2) * selected.product_cnt}
                          </td>
                          : 
                          <td className='container-item-info-detail-td-selected-price'>
                            {findProduct.price * selected.product_cnt}
                          </td>
                        }
                      </tr>
                    </table>
                    <hr className='detail-selected-hrTag'></hr>
                  </>
                )
              })
            }
            <p className='container-item-info-total'>total: {sum}({cnt})</p>
            <div className='container-item-info-btns'>
              {
                select.length !== 0
                ? <div className='container-item-info-btns-buy' onClick={buy_now}><Link to={"/purchase"} className="link-purchase">BUY NOW</Link></div>
                : <div className='container-item-info-btns-buy' onClick={() => {push_data_to_cart("noSelect")}}>BUY NOW</div>
              }
              
              {
                select.length !== 0
                ? <div className='container-item-info-btns-cart' onClick={() => {push_data_to_cart("cart")}}>ADD TO CART</div>
                : <div className='container-item-info-btns-cart' onClick={() => {push_data_to_cart("noSelect")}}>ADD TO CART</div>
              }
              {/* <div className='container-item-info-btns-cart' onClick={push_data_to_cart}>ADD TO CART</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='to-cart-alert-box-container'>
        <div className='alert-box'>
          <div className='alert-box-title'>
            <span className='alert-box-title-text'>ADD TO CART</span>
            <span className='alert-box-X-btn' onClick={alert_box_close}>X</span>
          </div>
          <div className='alert-box-info'>
            <p className='alert-box-info-state'>상품이 카트에 담겼습니다.</p>
            <p className='alert-box-info-ask'>바로 확인하시겠습니까?</p>
          </div>
          <div className='alert-box-btns'>
            <div className='alert-box-btn alert-box-btn-yes'><Link to={"/cart"} className='link-cart'>예</Link></div>
            <div className='alert-box-btn alert-box-btn-no' onClick={alert_box_close}>아니요</div>
          </div>
        </div>
      </div>
      <div className='select-size-alert_box-container'>
        <div className='alert-box'>
          <div className='alert-box-title'>
            <span className='alert-box-title-text'>SELECT SHOSE SIZE</span>
            <span className='alert-box-X-btn' onClick={alert_box_close}>X</span>
          </div>
          <div className='alert-box-info'>
            <p className='alert-box-info-state'>사이즈를 선택하지 않았습니다.</p>
            <p className='alert-box-info-ask'>사이즈를 선택해주세요</p>
          </div>
          <div className='alert-box-btns'>
            {/* <div className='alert-box-btn alert-box-btn-yes alert-box-btn-no'><Link to={"/cart"} className='link-cart'>예</Link></div> */}
            <div className='alert-box-btn alert-box-btn-no-select alert-box-btn-no' onClick={alert_box_close}>닫기</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;