/*eslint-disable*/

import '../style/Purchase.css'
import React, { useEffect, useState } from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import Purchase_Pc from './Purchase_Pc';
import Purchase_Mobile from './Purchase_Moblie';

function Purchase(props){

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
              <div className='delivery-method'>
                <div className='delivery-method-left'>배송방법</div>
                <div>1</div>
              </div>
              <div className='info-name'>
                <div className='info-name-left'>이름</div>
                <div>2</div>
              </div>
              <div className='shipping-address'>
                <div className='shipping-address-left'>배송주소</div>
                <div>3</div>
              </div>
              <div className='info-phone-number'>
                <div className='info-phone-number-left'>휴대폰</div>
                <div>4</div>
              </div>
            </div>
            <div className='purchase-container-shipping-information-body-shopper'>
              <div>주문고객</div>
              <div>이름</div>
              <div>휴대폰</div>
              <div>이메일</div>
            </div>
          </div>
        </div>
        {/* {
          props.pageWith === 'pc'
          ? <div className='purchase-container-shipping-address'></div>
          : null
        } */}
      </div>
    </div>
  )
}

export default Purchase;