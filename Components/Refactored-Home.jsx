import React from "react";
import Heading from './components/Heading';
import BodyText from './components/BodyText';
import Card from './components/Card';

/* 
  CORRECT WAY OF CREATING COMPONENTS.
  BREAK THE PAGE INTO COMPONENTS (REUSABLE)
*/

const CardData = [
  {
    heading: 'Services',
    text: 'dummy text...',
    linkText: 'Read More'
  },
  {
    heading: 'About Us',
    text: 'dummy text...',
    linkText: 'Read More'
  },
  {
    heading: 'Contact Us',
    text: 'dummy text...',
    linkText: 'Read More'
  },
  {
    heading: 'Projects',
    text: 'dummy text...',
    linkText: 'Read More'
  }
]
const Home = () => {
  return(
    <section id="home">
      <Header logo="logo.jpeg" />
      <div className="section">
        <Heading>Welcome!!</Heading>
        <BodyText>Welcome to the Home page....</BodyText>
        <img src="sample.jpeg" alt="" />
        <div className="cardContainer">
          <Card cardItem={CardData} />
        </div>
      </div>
    </section>
  );
};

export default Home;
