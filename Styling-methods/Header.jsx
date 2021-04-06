import React from "react";
import './App.css';
import './Global.scss';

const HeadingStyle = {
  'color' : 'black',
  'fontSize': '124px',
}

const SectionHeader = () => {
  return(
    <section>
      <header>
       <h1 style={HeadingStyle}>Heading</h1>
       <h4 className="subheading">Subheading...</h4>
      </header>
    </section>
  );
};

export default SectionHeader;
