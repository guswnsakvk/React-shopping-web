/*eslint-disable*/

import '../style/Last.css'
import React from 'react';
import {Link} from 'react-router-dom'

function Last(props){
  return(
    <div className='last-background'>
      <div className='last-container'>
        <div className='last-container-info'>
          <p className='last-container-info-text'>밑의 계좌로 돈을 보내주세요</p>
          <p className='last-container-info-bank'>기업은행</p>
          <p className='last-container-info-bank-count-number'>979-045056-01-011</p>
          <p className='last-container-info-price'>{props.paymentPrice}원</p>
          <div className='last-container-info-btn'><Link to={"/"} className="link-home">HOME</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Last