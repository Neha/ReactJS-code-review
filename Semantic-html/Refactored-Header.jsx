import React from "react";

const Header = (props) => {
  const { heading, subHeading} = props;
  return(
    <Header>
       <h1>{heading}</h1>
       <h2>{subHeading}</h2>
    </Header>
   
  );
};

export default Header;
