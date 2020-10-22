import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import Styles from './styles';
// You need to import your shared header...

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header />
      <h2>Welcome to my home page</h2>
      {/* You need a link to your about page as a call to action */}
      <Styles.Button>
        <Link to="../About">About</Link>
      </Styles.Button>
    </>
  );
}

export default Home;