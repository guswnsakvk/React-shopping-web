/*eslint-disable*/

import '../style/Purchase.css'
import React, { useEffect, useState } from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import Purchase_Pc from './Purchase_Pc';

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
            : null
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
      </div>
    </div>
  )
}

export default Purchase;