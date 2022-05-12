/*eslint-disable*/

import '../style/TypeProduct.css'
import {useParams} from 'react-router-dom'
import {Link, Route, Routes, NavLink} from 'react-router-dom'

function TypeProduct(props){
  let {id} = useParams()

  return(
    <div className='background'>
      <div className='TypeProduct'>
        <div className='TypeProduct-title'>{id}</div>
        <div className='TypeProduct-container'>
          {
            props.typeProductList.map((product) => {
              return(
                <div className='TypeProduct-container-item'>
                  <NavLink to={`/detail/${product.id}`}>
                  <div className='TypeProduct-container-item-img' style={{ backgroundImage: `url(${require(`../image/product${product.id + 1}.jpg`)})`}}></div>
                  </NavLink>
                  <div className='TypeProduct-container-item-info'>
                    <p className='TypeProduct-container-item-info-title'><Link to={`/detail/${product.id}`} className="link">{product.name}</Link></p>
                    <hr className='split-line'></hr>
                    {
                      product.BlackFriday === 'O'
                      ? <div className='price'>
                        <p className='line'>{product.price}원</p>
                        <p>{product.price / 2}원</p>
                      </div>
                      : <p className='price'>{product.price}원</p>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TypeProduct