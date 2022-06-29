/*eslint-disable*/

import '../style/Purchase_Pc.css'

function Purchase_Pc(props){
  let today = new Date()
  let tomorrow = new Date(today.setDate(today.getDate() + 1))
  let month = tomorrow.getMonth() + 1
  let date = tomorrow.getDate()
  let day = tomorrow.getDay()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  return(
    <>
      <table className='purchase-pc-container-table'>
        <thead className='purchase-pc-container-table-head'>
          <tr>
            <th className='purchase-pc-container-table-head-product-name'>상품명</th>
            <th className='purchase-pc-container-table-head-product-cnt'>수량</th>
            <th className='purchase-pc-container-table-head-product-price'>판매가</th>
            <th className='purchase-pc-container-table-head-product-total'>합계</th>
            <th className='purchase-pc-container-table-head-product-delivery'>배송일</th>
          </tr>
        </thead>
        <tbody className='purchase-pc-container-table-body'>
          {
            props.purchaseList.map((product, i) => {
              return(
                <tr>
                  <td className='purchase-pc-container-table-body-product'>
                    <div className='purchase-pc-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                    <div className='purchase-pc-container-table-body-product-info'>
                      <p>[{product.product_size}] {product.product_name}</p>
                      {
                        product.black_friday === 'O'
                        ? <p><span className='purchase-pc-container-table-body-product-sale'>{product.product_price * 2}</span> → {product.product_price}</p>
                        : <p>{product.product_price}</p>
                      }
                    </div>
                  </td>
                  <td>{product.product_cnt}</td>
                  <td>{product.product_price}</td>
                  <td>{product.product_price * product.product_cnt}</td>
                  {
                    product.product_quick === 'O'
                    ? <td>
                        <p>내일</p>
                        <p className="purchase-pc-container-table-body-date">({month}/{date}, {week[day]})</p>
                        <p className="purchase-pc-container-table-body-date">도착예정</p>
                      </td>
                    : <td>기본배송</td>
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Purchase_Pc