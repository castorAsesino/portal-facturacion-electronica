import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";
import { Link, Outlet } from "react-router-dom";
const Quotes1 = (props) => {
  const themeToggler = props.themeToggler;
  return (
    <>
      <div>
        Hello Worldasdasdasdasssdsad
        
      </div>
      <Outlet />
    </>
  );
};

export default Quotes1;
