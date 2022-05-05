/*eslint-disable*/

import '../style/WeeklyBest.css';

function WeeklyBest(props) {

  function WeeklyBestClick(e) {
    const main_menus = document.querySelectorAll(".WeeklyBest-main-menu")
    const lists = document.querySelector(".best-carousel-container")
    const id = e.target.attributes[0].value
    main_menus.forEach((main_menu) => {
      if (main_menu.innerText === e.target.innerText) {
        main_menu.classList.add("WeeklyBest-selected")
      } else {
        main_menu.classList.remove("WeeklyBest-selected")
      }
    })
    lists.style.transform = `translateX(-${lists.clientWidth * id}px)`
  }

  return (
    <div className='Container'>
      <div className='WeeklyBest'>
        <div>
          <p className='WeeklyBest-Top-title'>Weekly Best</p>
          <p className='WeeklyBest-Top-info'>이 주의 가장 핫한 인기상품입니다</p>
        </div>
        <div className='WeeklyBest-main-menus'>
          <div onClick={WeeklyBestClick} value={0} className='WeeklyBest-main-menu WeeklyBest-selected'>운동화</div>
          <div onClick={WeeklyBestClick} value={1} className='WeeklyBest-main-menu'>캔버스</div>
          <div onClick={WeeklyBestClick} value={2} className='WeeklyBest-main-menu'>워킹화</div>
          <div onClick={WeeklyBestClick} value={3} className='WeeklyBest-main-menu'>부츠</div>
          <div onClick={WeeklyBestClick} value={4} className='WeeklyBest-main-menu'>구두</div>
          <div onClick={WeeklyBestClick} value={5} className='WeeklyBest-main-menu'>샌들</div>
        </div>
      </div>
      <BestCarousel WeeklyBestList={props.WeeklyBestList}></BestCarousel>
    </div>
  );
}

function BestCarousel(props) {
  return (
    <div className='best-carousel'>
      <div className='best-carousel-container'>
        {
          props.WeeklyBestList.map((BestList) => {
            return (
              <div className='best-carousel-items' key={BestList}>
                {
                  BestList.map((Best) => {
                    return (
                      <div className='best-carousel-item' key={Best}>
                        <div className='best-carousel-item-img' style={{ backgroundImage: `url(${require(`../image/product${Best.id + 1}.jpg`)})`}}>
                          <div className='best-carousel-item-info'>
                            <p className='best-carousel-item-name'>{Best.name}</p>
                            {
                              Best.BlackFriday === 'O'
                              ? <div className='price'>
                                  <p className='line'>{Best.price}원</p>
                                  <p>{Best.price / 2}원</p>
                                </div>
                              : <p className='price'>{Best.price}원</p>
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WeeklyBest;