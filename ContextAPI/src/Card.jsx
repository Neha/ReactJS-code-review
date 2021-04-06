import React from "react";
import UserName from "./Home";

const Card = () => {
  return (
    <UserName.Consumer>
      {(fname) => {
        return <h1>You are logged in {fname}</h1>;
      }}
    </UserName.Consumer>
  );
};

export default Card;
