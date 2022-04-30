/*eslint-disable*/

import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js'
import Quick from './Quick.js'

function Home(props){
  return (
    <div>
      <div className='event'></div>
      <WeeklyBest WeeklyBestList={props.WeeklyBestList}></WeeklyBest>
      <Quick QuickList={props.QuickList}></Quick>
    </div>
  );
}

export default Home;