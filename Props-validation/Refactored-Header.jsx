import React from "react";
import Heading from "./Heading";
import PropTypes from "prop-types";

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

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}

SectionHeader.defaultProps = {
  heading: 'Welcome',
}

export default SectionHeader;
