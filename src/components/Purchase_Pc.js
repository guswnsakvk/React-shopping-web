/*eslint-disable*/

import '../style/Purchase_Pc.css'

function Purchase_Pc(props){
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
                  <td>1</td>
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