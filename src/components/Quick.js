/*eslint-disable*/

import '../style/Quick.css'
import {Link, NavLink} from 'react-router-dom'

function Quick(props){
  return(
    <div>
      <div className='quick'>
        <p className='quick-top-title'>당일 배송</p>
        <p className='quick-top-info'>서울 인근 3시전에 주문시 당일 배송</p>
        <ShowQuick QuickList={props.QuickList}></ShowQuick>
      </div>
    </div>
  )
}

function ShowQuick(props){
  return(
    <div className='showQuick-items'>
      {
        props.QuickList.map((quick) => {
          return(
            <div className='showQuick-item' key={quick.id}>
              <NavLink to={`/detail/${quick.id}`}>
                <div className='showQuick-item-img' style={{ backgroundImage: `url(${require(`../image/product${quick.id + 1}.jpg`)})`}}></div>
              </NavLink>
              <div className='showQuick-item-info'>
                <p className='showQuick-item-info-title'><Link to={`/detail/${quick.id}`} className='link'>{quick.name}</Link></p>
                <hr className='split-line'></hr>
                {
                  quick.BlackFriday === 'O'
                  ? <div className='price'>
                    <p className='line'>{quick.price}원</p>
                    <p>{quick.price / 2}원</p>
                  </div>
                  : <p className='price'>{quick.price}원</p>
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Quick