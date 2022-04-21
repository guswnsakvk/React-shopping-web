import '../style/WeeklyBest.css';

function WeeklyBest(props){
  const WeeklyBestMunus = document.querySelectorAll(".WeeklyBest-main-menu")

  function WeeklyBestClick(e){
    props.WeeklyBestSelectedChange(e.target.innerText)
    console.log(WeeklyBestMunus)
    for(let i=0;i<WeeklyBestMunus.length;i++){
      console.log(i)
    }
    console.log(props.WeeklyBestSelected)
  }

  return(
    <div className='Container'>
      <div className='WeeklyBest'>
        <div className='WeeklyBest-Top'>
          <p className='WeeklyBest-Top-title'>Weekly Best</p>
          <p className='WeeklyBest-Top-info'>이 주의 가장 핫한 인기상품입니다</p>
        </div>
        <div className='WeeklyBest-main-menus'>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu WeeklyBest-selected'>운동화</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>캔버스</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>워킹화</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>슬립온 슈즈</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>로퍼</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>부츠</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>구두</div>
          <div onClick={WeeklyBestClick} className='WeeklyBest-main-menu'>샌들</div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyBest;