import React from "react";

const Cards = () => {
  const creatList = (CardData) => {
    return CardData.map((cards, key) => {
        return <div id={key}><h1>{data.heading}</h1><h3>{data.text}</h3></div>
    })
  }
  return(
    <div>{creatList()}</div>
  );
};

export default Cards;
