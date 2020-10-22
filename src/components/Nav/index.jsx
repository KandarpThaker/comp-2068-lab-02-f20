import React from 'react';

// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
  return (
      <Router>
        <Styles.Nav>
          <ul>
            <li>
              {/* Your link to home here */}
              <Link to="/Home">Home</Link>
            </li>
            <li>
              {/* Your link to about here */}
              <Link to="/About">About</Link>
            </li>
          </ul>
        </Styles.Nav>

        <Switch>
          {/* Your Routes Here */}
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
        </Switch>
      </Router>
  );
}

export default Nav;