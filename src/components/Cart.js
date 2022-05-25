import '../style/Cart.css'

function cart(){
  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        <table className='cart-container-table'>
          <thead className='cart-container-table-head'>
            <tr>
              <th className='cart-container-table-head-product-info'>상품 정보</th>
              <th className='cart-container-table-head-product-cnt'>수량</th>
              <th className='cart-container-table-head-product-price'>상품 금액</th>
              <th className='cart-container-table-head-product-delivery'>배송 정보</th>
              <th className='cart-container-table-head-product-order'>주문</th>
            </tr>
          </thead>
          <tbody className='cart-container-table-body'>
            <tr>
              <td className='cart-container-table-body-product'>
                <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product2.jpg`)})`}}></div>
                <p>[운동화] 운동화1<br></br>20000 → 10000</p>
              </td>
              <td>
                <input className='cart-container-table-body-product-cnt' min={1} type={"number"}></input>
              </td>
              <td>10000원</td>
              <td>기본배송</td>
              <td>
                <div className='cart-container-table-body-product-order'>주문하기</div>
                <div className='cart-container-table-product-remove'>삭제하기</div>
              </td>
            </tr>
            <tr>
              <td className='cart-container-table-body-product'>
                <input className='cart-container-table-body-product-checkBox' type={"checkbox"}></input>
                <div className='cart-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product2.jpg`)})`}}></div>
                <p>[운동화] 운동화1<br></br>20000 → 10000</p>
              </td>
              <td>
                <input className='cart-container-table-body-product-cnt' min={1} type={"number"}></input>
              </td>
              <td>10000원</td>
              <td>기본배송</td>
              <td>
                <div className='cart-container-table-body-product-order'>주문하기</div>
                <div className='cart-container-table-product-remove'>삭제하기</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default cart;