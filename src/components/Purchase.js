/*eslint-disable*/

import '../style/Purchase.css'
import React, { useEffect, useState } from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import Purchase_Pc from './Purchase_Pc';
import Purchase_Mobile from './Purchase_Moblie';

function Purchase(props){
  let [phoneMiddleNumber, phoneMiddleNumberChange] = useState("")
  let [phoneLastNumber, phoneLastNumberChange] = useState("")
  let [siteName, siteNameChange] = useState("")

  useEffect(() => {
    if(window.innerWidth < 768){
      props.pageWithChange('mobile')
    } else{
      props.pageWithChange('pc')
    }
    console.log(window.innerWidth)
  }, [])

  window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
      props.pageWithChange('mobile')
    }
    else if(window.innerWidth > 768){
      props.pageWithChange('pc')
    }
  })

  function check_number(place, e){
    const value = e.target.value
    const only_number = value.replace(/[^0-9]/g, '')
    if(place === "middle"){
      phoneMiddleNumberChange(only_number)
    } else{
      phoneLastNumberChange(only_number)
    }
  }

  function dat_com(e){
    siteNameChange(e.target.value)
    if(e.target.value === ""){
      const site_reset = document.querySelector(".site")
      site_reset[0].selected = true;
    }
  }

  function select_site(e){
    siteNameChange(e.target.value)
  }

  function select_site_input(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 1
    select_box.blur()
  }

  function select_site_onblur(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 1
  }

  function select_site_focus(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 2
  }

  return(
    <div className='purchase-background'>
      <div className='purchase-container'>
        <div className='purchase-container-title'>구매하기</div>
        {
          props.pageWith === 'pc'
          ? <Purchase_Pc purchaseList={props.purchaseList}></Purchase_Pc>
          : <Purchase_Mobile purchaseList={props.purchaseList}></Purchase_Mobile>
        }
        <div className="purchase-receipt">
          <div className="purchase-receipt-content">
            <p className="purchase-receipt-content-title">총 상품금액</p>
            <p className="purchase-receipt-content-money">{props.totalPrice}원</p>
          </div>
          <div className="purchase-receipt-content">
            <p className="purchase-receipt-content-title">총 배송비</p>
            <p className="purchase-receipt-content-money">{props.deliveryPrice}원</p>
          </div>
          <div className="purchase-receipt-content">
            <p className="purchase-receipt-content-title">총 할인금액</p>
            <p className="purchase-receipt-content-money">{props.salePrice}원</p>
          </div>
          <div className="purchase-receipt-content">
            <p className="purchase-receipt-content-title">결제예정금액</p>
            <p className="purchase-receipt-content-money">{props.paymentPrice + props.deliveryPrice}원</p>
          </div>
        </div>
        <div className='purchase-container-shipping-information'>
          <div className='purchase-container-shipping-information-header'>배송정보</div>
          <div className='purchase-container-shipping-information-body'>
            <div className='purchase-container-shipping-information-body-address'>
              <div className='info-name'>
                <div className='info-name-left'>이름</div>
                <div className='info-name-right'>
                  <input className='info-name-right-input'></input>
                </div>
              </div>
              <div className='shipping-address'>
                <div className='shipping-address-left'>배송주소</div>
                <div className='shipping-address-right'>3</div>
              </div>
              <div className='info-phone-number'>
                <div className='info-phone-number-left'>휴대폰</div>
                <div className='info-phone-number-right'>
                  <select name="first-number">
                    <option value={"010"}>010</option>
                    <option value={"011"}>011</option>
                  </select>
                  <span>-</span>
                  <input className='info-phone-number-right-input' type={"text"} value={phoneMiddleNumber} maxLength='4' minLength='4' onChange={(e) => {check_number("middle", e)}} required></input>
                  <span>-</span>
                  <input className='info-phone-number-right-input' type={"text"} required value={phoneLastNumber} maxLength='4' minLength='4' onChange={(e) => {check_number("last",e)}}></input>
                </div>
              </div>
              <div className='email'>
                <div className='email-left'>이메일</div>
                <div className='email-right'>
                  <input className='email-right-input-address'></input>
                  <span>@</span>
                  <input className='email-right-input-site' placeholder='직접입력' value={siteName} onChange={(e) => {dat_com(e)}}></input>
                  <select name="site" className='site' onChange={(e) => {select_site(e)}} onInput={select_site_input} onBlur={select_site_onblur} onFocus={select_site_focus}>
                    <option value={""}>직접입력</option>
                    <option value={"naver.com"}>naver.com</option>
                    <option value={"daum.com"}>daum.com</option>
                    <option value={"google.com"}>gmail.com</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase;