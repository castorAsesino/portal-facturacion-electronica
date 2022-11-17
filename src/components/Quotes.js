import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";

const Quotes = (props) => {
  const themeToggler = props.themeToggler;
  return (
    <>
      <div>
        Hello World
        <button onClick={themeToggler}>Change Theme</button>
      </div>
    </>
  );
};

export default Quotes;
