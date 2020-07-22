import React from "react";

// webpack sees this and generates the file path at build time
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Bros" />
  </div>
);

export default logo;
