import React from "react";

/* 
  CODE IS NOT SEMANTIC
*/

const Header = (props) => {
  const { heading, subHeading} = props;
  return(
    <section class="header">
       <div class="h1">{heading}</div>
       <div class="h2">{subHeading}</div>
    </section>
   
  );
};

export default Header;
