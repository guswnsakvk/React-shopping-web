/*eslint-disable*/

import '../style/Quick.css'

function Quick(props){
  return(
    <div className='container'>
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
            <div className='showQuick-item' >
              <div className='showQuick-item-img' style={{ backgroundImage: `url(${require(`../image/product${quick.id + 1}.jpg`)})`}}></div>
              <div className='showQuick-item-info'>
                <p className='showQuick-item-info-title'>{quick.name}</p>
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