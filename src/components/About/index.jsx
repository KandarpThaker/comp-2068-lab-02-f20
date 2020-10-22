import React from 'react';
import Header from '../shared/Header';
import './styles.css'
const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header/>
      <h2>Welcome to my About Page</h2>
      {/* You need a paragraph describing a fun fact about you */}
      <p>I am Kandarp Thaker. I am enrolled in Computer Programmer Analyst at Georgian College. My hobbies are playing Video Games. Watching movies and listening the songs. Fun fact about me is I am still watching Dragon Ball.</p>
    </>
  );
}
 
export default Home;