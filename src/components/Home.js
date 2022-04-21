import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js';

function Home(props){
  return (
    <div>
      <div className='event'></div>
      <WeeklyBest WeeklyBestSelected={props.WeeklyBestSelected} WeeklyBestSelectedChange={props.WeeklyBestSelectedChange}></WeeklyBest>
    </div>
  );
}

export default Home;