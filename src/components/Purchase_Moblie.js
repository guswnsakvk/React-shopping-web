/*eslint-disable*/

import '../style/Purchase_Moblie.css'

function Purchase_Mobile(props){
  let today = new Date()
  let tomorrow = new Date(today.setDate(today.getDate() + 1))
  let month = tomorrow.getMonth() + 1
  let date = tomorrow.getDate()
  let day = tomorrow.getDay()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  function purchase_list_btn(){
    const header_btn = document.querySelector(".purchase-mobile-header-btn")
    const purchase_product_list = document.querySelector(".purchase-mobile-products-list")
    if(header_btn.innerText === "∨"){
      header_btn.innerText = "∧"
      purchase_product_list.style.display = "block"
    } else{
      header_btn.innerText = "∨"
      purchase_product_list.style.display = "none"
    }
  }

  return(
    <>
      <div className='purchase-mobile-header'>
        <div className="purchase-mobile-title">장바구니 상품</div>
        <div className="purchase-mobile-header-btn" onClick={purchase_list_btn}>∧</div>
      </div>
      <div className="purchase-mobile-products-list">
        {
          props.purchaseList.map((product, i) => {
            return(
              <div className='purchase-mobile-products-list-product'>
                <div className='purchase-mobile-products-list-product-header'>
                  <span>[{product.product_size}] {product.product_name}</span>
                </div>
                <div className='purchase-mobile-products-list-product-body'>
                  <div className="purchase-mobile-products-list-product-body-img" style={{backgroundImage: `url(${require(`../image/product${parseInt(product.product_id)+1}.jpg`)})`}}></div>
                  <div className='purchase-mobile-products-list-product-body-info'>
                    <div className="purchase-mobile-products-list-product-body-info-price">
                      {
                        product.black_friday === 'O'
                        ? <p>{product.product_price}<span className="purchase-mobile-products-list-product-body-info-price-sale">원(50%)할인 <b>X {product.product_cnt}개</b></span></p>
                        : <p>{product.product_price}<b className="purchase-mobile-products-list-product-body-info-price-cnt">원 X {product.product_cnt}개</b></p>
                      }
                    </div>
                    <div className="purchase-mobile-products-list-product-body-info-delivery">
                      {
                        product.product_quick === 'O'
                        ? <p>내일({month}/{date}, {week[day]}) 도착예정</p>
                        : <p>기본배송</p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Purchase_Mobile;