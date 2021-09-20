import React from "react";
import { Link, withRouter } from "react-router-dom";
import facebookLogo from "./../../images/facebook.png";
import CircularIcon from "./IconComponents/CircularIcon.jsx";

const styles = {
  barStyles:{
    display: "flex",
    justifyContent: "space-between",
    height: "55px",
    backgroundColor: "white",
    boxShadow: "0px 1px 3px #d8d5d5",
    padding: "5px 5px 5px 14px",
    position: "relative", //This is done so that the shadow will appear above the Home component
    zIndex: "10"
  },
  iconStyles: {
    display: "flex",
  },
  logoStyle: {
    margin: "0px 20px 10px 0px"
  }
};

function TopBar(props) {
  return (
    <div className="navigation">
      <nav style = {styles.barStyles}>
        <div>
          <img style = {styles.logoStyle} src = {facebookLogo} width = "40" height = "40"></img>
          <Link class="navbar-brand" to="/">
            Facebook Lite
          </Link>
        </div>
        <div style = {styles.iconStyles}>
          <CircularIcon type = "plus"/>
          <CircularIcon type = "messenger"/>
          <CircularIcon type = "notifications"/>
          <CircularIcon type = "triangle"/>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(TopBar);
