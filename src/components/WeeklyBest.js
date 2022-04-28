/*eslint-disable*/

import '../style/WeeklyBest.css';

function WeeklyBest(props){

  function WeeklyBestClick(e){
    const main_menus = document.querySelectorAll(".WeeklyBest-main-menu")
    main_menus.forEach((main_menu) => {
      if (main_menu.innerText === e.target.innerText){
        main_menu.classList.add("WeeklyBest-selected")
      } else{
        main_menu.classList.remove("WeeklyBest-selected")
      }
    })
  }

  return(
    <div className='Container'>
      <div className='WeeklyBest'>
        <div>
          <p className='WeeklyBest-Top-title'>Weekly Best</p>
          <p className='WeeklyBest-Top-info'>이 주의 가장 핫한 인기상품입니다</p>
        </div>
        <div className='WeeklyBest-main-menus'>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu WeeklyBest-selected'>운동화</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>캔버스</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>워킹화</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>부츠</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>구두</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>샌들</div>
        </div>
      </div>
      <Carousel WeeklyBestList={props.WeeklyBestList}></Carousel>
    </div>
  );
}

function Carousel(props){
  return(
    <>
    <div className='item-container'>
      {
        props.WeeklyBestList.map((BestList) => {
          return(
            <div className='item-carousel' key={BestList}>
              {
                BestList.map((Best) => {
                  return(
                    <div className='item-area' key={Best}>
                      <img className='item-Img' src={require(`../image/product${Best.id + 1}.jpg`)}></img>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default WeeklyBest;