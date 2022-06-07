import "../style/Cart_Mobile.css"

function Cart_Mobile(){
  function cart_list_btn(){
    const div = document.querySelector(".cart-mobile-header-btn")
    if(div.innerText === "∨"){
      div.innerText = "∧"
    } else{
      div.innerText = "∨"
    }
  }

  return(
    <>
      <div className="cart-mobile-header">
        <div className="cart-mobile-title">장바구니 상품</div>
        <div className="cart-mobile-header-btn" onClick={cart_list_btn}>∨</div>
      </div>
    </>
  )
}

export default Cart_Mobile