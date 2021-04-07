import React from "react";

/* 
  AVOID WRITTING NON-FUNCTIONAL CODE
*/

const Cards = () => {
  const createList = (CardData) => {
    return CardData.map((cards, key) => {
        return <div id={key}><h1>{cards.heading}</h1><h3>{cards.text}</h3></div>
    })
  }
  return(
    <div>{createList()}</div>
  );
};

export default Cards;
