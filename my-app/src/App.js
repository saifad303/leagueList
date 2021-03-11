import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LeagueList from './components/leagueList/LeagueList'
import TeamDetail from './components/leagueDetail/TeamDetail'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.map'

function App() {

  return (
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={LeagueList} />
              <Route path="/detail/:id" component={TeamDetail}/>
            </Switch>
          </Router>
        </>
  );
}

export default App;