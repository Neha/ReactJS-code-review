import React from "react";

/* 
  WRONG WAY OF CREATING COMPONENTS.
  AVOID PUTTING ALL CODE IN ONE COMPONENT
*/

const Home = () => {
  return(
    <section id="home">
      <div>
        <a className="logo" href="/">
          React Tutorial
        </a>
      </div>
      <div className="section">
        <h1>Welcome!!</h1>
        <p>Welcome to the Home page....</p>
        <img src="sample.jpeg" alt="" />
        <div className="cardContainer">
          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>

          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>

          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>

          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>

          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>

          <div>
            <h2>Services</h2>
            <p>Dummy Text</p>
            <a href="/">Read more...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
