import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems
            isAuthenticated={props.isAuth}
            closed={props.closed}
          />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
