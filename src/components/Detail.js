import '../style/Detail.css'

function Detail(){
  return(
    <div className='container'>
      <div className='container-item'>
        <div className='container-item-img' style={{backgroundImage: `url(${require(`../image/product${1}.jpg`)})`}}></div>
        <div className='container-item-info'>
          <p className='container-item-info-title'>상품 1</p>
          <hr className='hrTag'></hr>
          <div className='container-item-info-detail'>
            {/* <div className='container-item-info-detail-left'>
              <p>신발 종류</p>
              <p>판매가</p>
              <p>할인가</p>
              <p>사이즈</p>
            </div>
            <div>
              <p>운동화</p>
              <p>10000</p>
              <p>5000</p>
              <sel></sel>
            </div> */}
          </div>
          <hr className='hrTag'></hr>
          <p className='container-item-info-total'>total: 0(0개)</p>
          <div className='container-item-info-btns'>
            <div className='container-item-info-btns-buy'>BUY NOW</div>
            <div className='container-item-info-btns-cart'>ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
  )
}

//style={{ backgroundImage: `url(${require(`../image/product${Best.id + 1}.jpg`)})`}

export default Detail;