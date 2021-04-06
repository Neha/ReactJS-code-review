import React from "react";
import './App.css';

const SectionHeader = (props) => {
    const { heading, subheading } = props;
  return(
    <section>
      <header>
        <Heading className="heading" type="h1">{heading}</Heading>
        <Heading type="h4">{subheading}</Heading>
      </header>
    </section>
  );
};

export default SectionHeader;
