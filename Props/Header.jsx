import React from "react";

/* 
  AVOID HARD-CODED CONTENT.
  MAKE THE COMPONENTS REUSABLE.
*/

const SectionHeader = () => {
  return(
    <section>
      <header>
       <h1 className="heading">Heading</h1>
       <h4 className="subheading">Subheading...</h4>
      </header>
    </section>
  );
};

export default SectionHeader;
