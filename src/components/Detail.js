import '../style/Detail.css'

function Detail(){
  return(
    <div className='container'>
      <div className='container-item'>
        <div className='container-item-img' style={{backgroundImage: `url(${require(`../image/product${1}.jpg`)})`}}></div>
        <div className='container-item-info'>
          <p className='container-item-info-title'>상품 1</p>
          <hr className='detail-hrTag'></hr>
          <div className='container-item-info-detail'>
            <table>
              <tr>
                <td className='container-item-info-detail-td-title'>신발 종류</td>
                <td>운동화</td>
              </tr>
              <tr>
                <td className='container-item-info-detail-td-title'>판매가</td>
                <td>10000</td>
              </tr>
              <tr>
                <td className='container-item-info-detail-td-title'>할인가</td>
                <td>5000</td>
              </tr>
              <tr>
                <td className='container-item-info-detail-td-title'>사이즈</td>
                <td>
                  <select name='size' className='container-item-info-detail-td-select'>
                    <option value={""}>- [필수] 사이즈 선택 -</option>
                    <option value={220}>220</option>
                    <option value={230}>230</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <hr className='detail-hrTag'></hr>
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