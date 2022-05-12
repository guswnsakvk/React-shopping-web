/*eslint-disable*/

import '../style/TypeProduct.css'

function TypeProduct(props){
  return(
    <div className='background'>
      <div className='TypeProduct-container'>
        {
          props.typeProductList.map((product) => {
            return(
              <div className='TypeProduct-container-item'>
                <div className='TypeProduct-container-item-img' style={{ backgroundImage: `url(${require(`../image/product${product.id + 1}.jpg`)})`}}></div>
              
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TypeProduct