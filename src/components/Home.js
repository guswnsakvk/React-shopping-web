/*eslint-disable*/

import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js'
import Quick from './Quick.js'
import {Link} from 'react-router-dom'

function Home(props){
  return (
    <div>
      <Link to={"/shoes_type/Black_Friday"}>
        <div className='event'></div>
      </Link>
      <WeeklyBest WeeklyBestList={props.WeeklyBestList}></WeeklyBest>
      <Quick QuickList={props.QuickList}></Quick>
    </div>
  );
}

export default Home;