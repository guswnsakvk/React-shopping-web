import "../style/Cart_Mobile.css"

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
                    <input className="cart-mobile-products-list-product-header-checkbox" type={"checkbox"}></input>
                    <span>[{product.product_size}] {product.product_name}</span>
                  </div>
                  <div className="cart-mobile-products-list-product-header-remove-btn">X</div>
                </div>
                <div className="cart-mobile-products-list-product-body">
                  <div className="cart-mobile-products-list-product-body-img" style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                  <div className="cart-mobile-products-list-product-body-info"></div>
                </div>
                <div className="cart-mobile-products-list-product-foot"></div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart_Mobile