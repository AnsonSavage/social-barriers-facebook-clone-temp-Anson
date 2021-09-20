import React from "react";
import "./circularIconStyles.css";

class CircularIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className = "circle">
        <img src = {require("./../../../images/icons/" + this.props.type + "Icon.png").default} className = "imageIcon"></img>
      </div>
    )
  }
}

export default CircularIcon;
