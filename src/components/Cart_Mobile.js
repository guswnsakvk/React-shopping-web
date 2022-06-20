/*eslint-disable*/

import "../style/Cart_Mobile.css"
  let today = new Date()
  let tomorrow = new Date(today.setDate(today.getDate() + 1))
  let month = tomorrow.getMonth() + 1
  let date = tomorrow.getDate()
  let day = tomorrow.getDay()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  function Cart_Mobile(props){
    function cart_list_btn(){
      const header_btn = document.querySelector(".cart-mobile-header-btn")
      const cart_product_list = document.querySelector(".cart-mobile-products-list")
      if(header_btn.innerText === "∨"){
        header_btn.innerText = "∧"
        cart_product_list.style.display = "block"
      } else{
        header_btn.innerText = "∨"
        cart_product_list.style.display = "none"
      }
    }

    return(
      <>
        <div className="cart-mobile-header">
          <div className="cart-mobile-title">장바구니 상품</div>
          <div className="cart-mobile-header-btn" onClick={cart_list_btn}>∧</div>
        </div>
        <div className="cart-mobile-products-list">
          {
            props.cartCopy.map((product, i) => {
              return(
                <div className="cart-mobile-products-list-product">
                  <div className="cart-mobile-products-list-product-header">
                    <div className="cart-mobile-products-list-product-header-group">
                      <input onClick={() => {props.select_cart_product(i)}} className="cart-mobile-products-list-product-header-checkbox" type={"checkbox"} checked={product.product_select} value={product.product_select}></input>
                      <span>[{product.product_size}] {product.product_name}</span>
                    </div>
                    <div onClick={() => {props.remove_cart_item(i)}} className="cart-mobile-products-list-product-header-remove-btn">X</div>
                  </div>
                  <div className="cart-mobile-products-list-product-body">
                    <div className="cart-mobile-products-list-product-body-img" style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                    <div className="cart-mobile-products-list-product-body-info">
                      <div className="cart-mobile-products-list-product-body-info-price">
                        {
                          product.black_friday === 'O'
                          ? <p>{product.product_price}<span className="cart-mobile-products-list-product-body-info-price-sale">원(50%)할인</span></p>
                          : <p>{product.product_price}원</p>
                        }
                      </div>
                      <div className="cart-mobile-products-list-product-body-info-delivery">
                        {
                          product.product_quick === 'O'
                          ? <p>내일({month}/{date}, {week[day]}) 도착예정</p>
                          : <p>기본배송</p>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="cart-mobile-products-list-product-foot">
                    <div className="cart-mobile-products-list-product-foot-cnt">
                      <div onClick={() => {props.minus_btn(i)}} className="cart-mobile-products-list-product-foot-cnt-btn border-left">-</div>
                      <input className="cart-mobile-products-list-product-foot-cnt-input" type={"number"} value={product.product_cnt} onChange={(e) => {props.set_cart_value(i, e)}} min={1}></input>
                      <div onClick={() => {props.plus_btn(i)}} className="cart-mobile-products-list-product-foot-cnt-btn border-right">+</div>
                    </div>
                    <div className="cart-mobile-products-list-product-foot-btn">주문</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
    )
}

export default Cart_Mobile