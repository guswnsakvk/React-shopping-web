import '../style/Cart.css'

function cart(){
  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        <table className='cart-container-table'>
          <thead className='cart-container-table-head'>
            <tr>
              <th  width={650}>상품 정보</th>
              <th  width={100}>수량</th>
              <th  width={150}>상품 금액</th>
              <th  width={150}>배송 정보</th>
              <th  width={150}>주문</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='test'></div>
              </td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default cart;