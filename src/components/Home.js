/*eslint-disable*/

import '../style/Home.css';
import WeeklyBest from './WeeklyBest.js'
import Quick from './Quick.js'
import Detail from './Detail.js'
import {Link, Route, Switch} from 'react-router-dom'

function Home(props){
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div className='event'></div>
          <WeeklyBest WeeklyBestList={props.WeeklyBestList}></WeeklyBest>
          <Quick QuickList={props.QuickList}></Quick>
        </Route>
        <Route path="/detail/:id">
          <Detail Shoes={props.Shoes}></Detail>
        </Route>
      </Switch>

    </div>
  );
}

export default Home;