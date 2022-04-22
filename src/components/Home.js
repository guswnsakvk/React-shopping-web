import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js';

function Home(){
  return (
    <div>
      <div className='event'></div>
      <WeeklyBest></WeeklyBest>
    </div>
  );
}

export default Home;