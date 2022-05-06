/*eslint-disable*/

import '../style/Detail.css'
import {useParams} from 'react-router-dom'

function Detail(props){
  let {id} = useParams()
  let findProduct = props.Shoes.find(function(product){
    return product.id == id
  })

  return(
    <div className='container'>
      <div className='container-item'>
        <div className='container-item-img' style={{backgroundImage: `url(${require(`../image/product${findProduct.id + 1}.jpg`)})`}}></div>
        <div className='container-item-info'>
          <p className='container-item-info-title'>{findProduct.name}</p>
          <hr className='detail-hrTag'></hr>
          <div className='container-item-info-detail'>
            <table>
              <tr>
                <td className='container-item-info-detail-td-title'>신발 종류</td>
                <td>{findProduct.type}</td>
              </tr>
              {
                findProduct.BlackFriday === 'O'
                ? 
                <>
                  <tr>
                    <td className='container-item-info-detail-td-title'>판매가</td>
                    <td className='before-sale'>{findProduct.price}</td>
                  </tr>
                  <tr>
                    <td className='container-item-info-detail-td-title'>할인가</td>
                    <td>{findProduct.price / 2}</td>
                  </tr>
                </>
                :
                <tr>
                  <td className='container-item-info-detail-td-title'>판매가</td>
                  <td>{findProduct.price}</td>
                </tr>
              }
              <tr>
                <td className='container-item-info-detail-td-title'>사이즈</td>
                <td>
                  <select name='size' className='container-item-info-detail-td-select'>
                    <option value={""}>- [필수] 사이즈 선택 -</option>
                    {
                      findProduct.size.map((shoes_size) => {
                        return(
                          <option value={shoes_size}>{shoes_size}</option>
                        )
                      })
                    }
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

export default Detail;