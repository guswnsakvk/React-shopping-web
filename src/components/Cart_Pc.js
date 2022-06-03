import "../style/Cart_Pc.css"

function Cart_Pc(props){
  return(
    <table className='cart-pc-container-table'>
      <thead className='cart-pc-container-table-head'>
        <tr>
          <th className='cart-pc-container-table-head-product-info'>상품 정보</th>
          <th className='cart-pc-container-table-head-product-cnt'>수량</th>
          <th className='cart-pc-container-table-head-product-price'>상품 금액</th>
          <th className='cart-pc-container-table-head-product-delivery'>배송 정보</th>
          <th className='cart-pc-container-table-head-product-order'>주문</th>
        </tr>
      </thead>
      <tbody className='cart-pc-container-table-body'>
        {
          props.cartCopy.map((product, i) => {
            return(
              <tr>
                <td className='cart-pc-container-table-body-product'>
                  <input className='cart-pc-container-table-body-product-checkBox' type={"checkbox"}></input>
                  <div className='cart-pc-container-table-body-product-img' style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                  <div className='cart-pc-container-table-body-product-info'>
                    <p>[{product.product_size}] {product.product_name}</p>
                    {
                      product.black_friday === 'O'
                      ?
                        <p><span className='cart-pc-container-table-body-product-sale'>{product.product_price * 2}</span> → {product.product_price}</p>
                      :
                        <p>{product.product_price}</p>
                    }
                  </div>
                </td>
                <td>
                  <input className='cart-pc-container-table-body-product-cnt' onChange={(e) => {props.set_cart_value(i, e)}} min={1} type={"number"} value={product.product_cnt}></input>
                </td>
                <td>{product.product_price}</td>
                <td>기본배송</td>
                <td>
                  <div className='cart-pc-container-table-body-product-order'>주문하기</div>
                  <div className='cart-pc-container-table-product-remove' onClick={() => {props.remove_cart_item(i)}}>삭제하기</div>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Cart_Pc