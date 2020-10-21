import React from 'react';

// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            {/* Your link to home here */}
          </li>
          <li>
            {/* Your link to about here */}
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        {/* Your Routes Here */}
      </Switch>
    </Router>
  );
}

export default Nav;