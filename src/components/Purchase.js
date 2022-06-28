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
      </div>
    </div>
  )
}

export default Purchase;