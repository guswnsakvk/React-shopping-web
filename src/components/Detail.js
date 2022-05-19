/*eslint-disable*/

import '../style/Detail.css'
import {useParams} from 'react-router-dom'
import React, { useState } from 'react';

function Detail(props){
  let {id} = useParams()
  let findProduct = props.Shoes.find(function(product){
    return product.id == id
  })
  let [cnt, cntChange] = useState(0)
  let [select, selectChange] = useState([])
  let [sum, sumChange] = useState(0)

  function select_size(e){
    if(e.target.value !== ""){
      let check = false
      let copy = [...select]
      let data = {product_size : e.target.value, product_cnt : 1, product_id: id}
      for(let i=0;i<select.length;i++){
        if(select[i].product_size === e.target.value){
          check = true
          break
        }
      }
      if(!check){
        let product_sum = sum
        if(findProduct.BlackFriday === 'O'){
          product_sum += findProduct.price / 2
          sumChange(product_sum)
        } else{
          product_sum += findProduct.price
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

  function setValue(index, e){
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
    product_count += e.target.value - copy[index].product_cnt
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

  function push_data_to_cart(){
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
        copy.push(select[index])
      }
    })
    selectChange([])
    sumChange(0)
    cntChange(0)
    select_List.children[0].setAttribute('selected', '')
    console.log(check)
    console.log(copy)
    props.cartChange(copy)
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
                <tr>
                  <td className='container-item-info-detail-td-title'>신발 종류</td>
                  <td>{findProduct.type}</td>
                </tr>
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
                  <tr>
                    <td className='container-item-info-detail-td-left'>판매가</td>
                    <td>{findProduct.price}</td>
                  </tr>
                }
                <tr>
                  <td className='container-item-info-detail-td-left'>사이즈</td>
                  <td>
                    <select onChange={select_size} name='size' className='container-item-info-detail-td-select'>
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
              </table>
            </div>
            <hr className='detail-selected-hrTag'></hr>
            {
              select.map((selected, i) => {
                return(
                  <>
                    <table className='container-item-info-detail-selected'>
                      <tr>
                        <td className='container-item-info-detail-selected-title'>
                          <p>{findProduct.name}</p>
                          <p>{selected.product_size}</p>
                        </td>
                        <td className='container-item-info-detail-td-selected-cnt'>
                          <input onChange={(e) => {setValue(i, e)}} type={"number"} min={1} value={selected.product_cnt}></input>
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
              <div className='container-item-info-btns-buy'>BUY NOW</div>
              <div className='container-item-info-btns-cart' onClick={push_data_to_cart}>ADD TO CART</div>
            </div>
          </div>
        </div>
      </div>
      <div className='alert-box'>
        <div className='alert-box-title'>
          <span>ADD TO CART</span>
          <span className='alert-box-hidden'>X</span>
        </div>
        <div className='alert-box-info'>
          <p>상품이 카트에 담겼습니다.</p>
          <p>바로 확인하시겠습니까?</p>
        </div>
        <div className='alert-box-btns'>
            <div className='alert-box-btns-yes'>예</div>
            <div className='alert-box-btns-no'>아니요</div>
        </div>
      </div>
    </div>
  )
}

export default Detail;