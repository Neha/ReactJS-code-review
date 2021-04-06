import React from "react";

const SectionHeader = (props) => {
    const { heading, subheading } = props;
  return(
    <section>
      <header>
        <Heading type="h1">{heading}</Heading>
        <Heading type="h4">{subheading}</Heading>
      </header>
    </section>
  );
};

export default SectionHeader;
