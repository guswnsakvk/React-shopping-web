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
  let [name, nameChange] = useState("")
  let [postAddress, postAddressChange] = useState("")
  let [address, addressChange] = useState("")
  let [detailAddress, detailAddressChange] = useState("")
  let [email, emailChange] = useState("")
  let [nameCheck, nameCheckChange] = useState(false)
  let [postAddressCheck, postAddressCheckChange] = useState(false)
  let [addressCheck, addressCheckChange] = useState(false)
  let [phoneMiddleNumberCheck, phoneMiddleNumberCheckChange] = useState(false)
  let [phoneLastNumberCheck, phoneLastNumberCheckChange] = useState(false)
  let [emailCheck, emailCheckChange] = useState(false)
  let [siteNameCheck, siteNameCheckChange] = useState(false)

  // let nameCheck = false
  // let postAddressCheck = false
  // let addressCheck = false
  // let phoneMiddleNumberCheck = false
  // let phoneLastNumberCheck = false
  // let emailCheck = false
  // let siteNameCheck = false

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
      if(e.target.value.length === 4) phoneMiddleNumberCheckChange(true)
      else phoneMiddleNumberCheckChange(false)
    } else if(place === "post"){
      postAddressChange(only_number)
      if(e.target.value.length === 5) postAddressCheckChange(true)
      else postAddressCheckChange(false)
    } else{
      phoneLastNumberChange(only_number)
      if(e.target.value.length === 4) phoneLastNumberCheckChange(true)
      else phoneLastNumberCheckChange(false)
    } 
  }

  function dat_com(e){
    siteNameChange(e.target.value)
    if(e.target.value === ""){
      const site_reset = document.querySelector(".site")
      site_reset[0].selected = true;
    }
    if(e.target.value.length !== 0 && e.target.value.substr(-4) === ".com") siteNameCheckChange(true)
    else siteNameCheckChange(false)
  }

  function select_site(e){
    siteNameChange(e.target.value)
    if(e.target.value.length !== 0 && e.target.value.substr(-4) === ".com") siteNameCheckChange(true)
    else siteNameCheckChange(false)
  }

  function select_site_input(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 1
    site_reset.blur()
  }

  function select_site_onblur(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 1
  }

  function select_site_focus(){
    const site_reset = document.querySelector(".site")
    site_reset.size = 2
  }

  function set_value(value,e){
    if (value === "name"){
      nameChange(e.target.value)
      if(e.target.value !== "") nameCheckChange(true)
      else nameCheckChange(false)
    } else if(value === "address"){
      addressChange(e.target.value)
      if(e.target.value !== "") addressCheckChange(true)
      else addressCheckChange(false)
    } else if(value === "detail"){
      detailAddressChange(e.target.value)
    } else if(value === "email"){
      emailChange(e.target.value)
      if(e.target.value !== "") emailCheckChange(true)
      else emailCheckChange(false)
    }
  }

  function alert_text(){
    // let nameCheck = false
    // let postAddressCheck = false
    // let addressCheck = false
    // let phoneMiddleNumberCheck = false
    // let phoneLastNumberCheck = false
    // let emailCheck = false
    // let siteNameCheck = false

    // if(name !== "") nameCheck = true

    // if(postAddress.length === 5) postAddressCheck = true
    // else shipping_address_postal_text.style.display = "block"

    // if(address !== "") addressCheck = true
    // else shipping_address_text.style.display = "block"

    // if(phoneMiddleNumber.length === 4) phoneMiddleNumberCheck = true
    // else phone_number_text.style.display = "block"
    
    // if(phoneLastNumber.length === 4) phoneLastNumberCheck = true
    // else phone_number_text.style.display = "block"
    
    // if(email !== "") emailCheck = true
    // else email_text.style.display = "block"

    // if(siteName.length !== 0 && siteName.substr(-4) === ".com") siteNameCheck = true
    // else email_text.style.display = "block"

    const name_text = document.querySelector(".info-name-right-alert-text")
    const shipping_address_postal_text = document.querySelector(".shipping-address-right-postal-code-text")
    const shipping_address_text = document.querySelector(".shipping-address-right-address-text")
    const phone_number_text = document.querySelector(".info-phone-number-right-alert-text")
    const email_text = document.querySelector(".email-right-alert-text")

    if(!nameCheck) name_text.style.display = "block"

    if(!postAddressCheck) shipping_address_postal_text.style.display = "block"

    if(!addressCheck) shipping_address_text.style.display = "block"

    if(!phoneMiddleNumberCheck) phone_number_text.style.display = "block"

    if(!phoneLastNumberCheck) phone_number_text.style.display = "block"

    if(!emailCheck) email_text.style.display = "block"

    if(!siteNameCheck) email_text.style.display = "block"
    
    alert('정보를 다시 입력해주세요')

    console.log(nameCheck)
    console.log(postAddressCheck)
    console.log(addressCheck)
    console.log(phoneMiddleNumberCheck)
    console.log(phoneLastNumberCheck)
    console.log(emailCheck)
    console.log(siteNameCheck)
  }

  return(
    <>
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
                  <input className='info-name-right-input' value={name} onChange={(e) => {set_value("name", e)}}></input>
                  <p className='info-name-right-alert-text mobile-font-size'>예금주 이름과 같게 입력해주세요</p>
                </div>
              </div>
              <div className='shipping-address'>
                <div className='shipping-address-left'>배송주소</div>
                <div className='shipping-address-right'>
                  <div className='shipping-address-right-postal-code'>
                    <input className='shipping-address-right-postal-code-input' type={"text"} value={postAddress} onChange={(e) => {check_number("post", e)}} minLength={5} maxLength={5} placeholder='우편번호'></input>
                    <p className='shipping-address-right-postal-code-text mobile-font-size'>우편번호를 입력해주세요</p>
                  </div>
                  <div className='shipping-address-right-address'>
                    <input className='shipping-address-right-address-input' placeholder='주소' value={address} onChange={(e) => {set_value("address",e)}}></input>
                    <p className='shipping-address-right-address-text mobile-font-size'>주소를 입력해주세요</p>
                  </div>
                  <div className='shipping-address-right-detail-address'>
                    <input className='shipping-address-right-detail-address-input' placeholder='상세주소' value={detailAddress} onChange={(e) => {set_value("detail",e)}}></input>
                  </div>
                </div>
              </div>
              <div className='info-phone-number'>
                <div className='info-phone-number-left'>휴대폰</div>
                <div className='info-phone-number-right'>
                  <div className='phone-number'>
                    <select name="first-number" className='info-phone-number-right-first-number'>
                      <option value={"010"}>010</option>
                      <option value={"011"}>011</option>
                    </select>
                    <span>-</span>
                    <input className='info-phone-number-right-input' type={"text"} value={phoneMiddleNumber} maxLength='4' minLength='4' onChange={(e) => {check_number("middle", e)}}></input>
                    <span>-</span>
                    <input className='info-phone-number-right-input margin-right' type={"text"} value={phoneLastNumber} maxLength='4' minLength='4' onChange={(e) => {check_number("last",e)}}></input>
                    </div>
                  <div className='phone-number-alert'>
                    <p className='info-phone-number-right-alert-text mobile-font-size'>핸드폰 번호를 적어주세요</p>
                  </div>
                </div>
              </div>
              <div className='email'>
                <div className='email-left'>이메일</div>
                <div className='email-right'>
                  <div className='email-input'>
                    <input className='email-right-input-address' value={email} onChange={(e) => {set_value("email",e)}}></input>
                    <span>@</span>
                    <input className='email-right-input-site' placeholder='직접입력' value={siteName} onChange={(e) => {dat_com(e)}}></input>
                    <select name="site" className='site' onChange={(e) => {select_site(e)}} onInput={select_site_input} onBlur={select_site_onblur} onFocus={select_site_focus}>
                      <option value={""}>직접입력</option>
                      <option value={"naver.com"}>naver.com</option>
                      <option value={"daum.com"}>daum.com</option>
                      <option value={"google.com"}>gmail.com</option>
                    </select>
                  </div>
                  <div className='email-alert'>
                    <p className='email-right-alert-text mobile-font-size'>이메일을 다시 적어주세요</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    </div>
      {
        nameCheck & postAddressCheck & addressCheck & phoneMiddleNumberCheck & phoneLastNumberCheck & emailCheck & siteNameCheck
        ? <div className='purchase-btn'>결제하기</div>
        : <div className='purchase-btn' onClick={alert_text}>결제하기</div>
      }
    </div>
    </>
  )
}

export default Purchase;