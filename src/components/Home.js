/*eslint-disable*/

import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js';

function Home(props){
  return (
    <div>
      <div className='event'></div>
      <WeeklyBest WeeklyBestList={props.WeeklyBestList}></WeeklyBest>
    </div>
  );
}

export default Home;