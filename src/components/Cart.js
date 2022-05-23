import '../style/Cart.css'

function cart(){
  return(
    <div className='cart-background'>
      <div className='cart-container'>
        <div className='cart-container-title'>CART</div>
        <table className='cart-container-table'>
          <thead>
            <tr className='cart-container-table-head'>
              <td width={650}>상품 정보</td>
              <td width={100}>수량</td>
              <td width={150}>상품 금액</td>
              <td width={150}>배송 정보</td>
              <td width={150}>주문</td>
            </tr>
          </thead>
          <tbody className='cart-container-table-body'>
            <tr>
              <td>
                <a>
                  <img className='cart-container-table-body-img' src='#'></img>
                </a>
              </td>
              <td>
                <input type={"number"}></input>
              </td>
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