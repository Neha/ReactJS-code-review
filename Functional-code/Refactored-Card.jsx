import React from "react";

/* 
  FUNCTIONAL CODE
*/

const creatList = (CardData) => {
  return CardData.map((cards, key) => {
      return <div id={key}><h1>{cards.heading}</h1><h3>{cards.text}</h3></div>
  })
}

const Cards = (props) => {
  const { CardData } = props;
  return (
    <div>{creatList(CardData)}</div>
  );
};

export default Cards;
