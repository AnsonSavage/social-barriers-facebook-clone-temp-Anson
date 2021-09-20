import React from "react";
import "./SidebarButton.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class SidebarButton extends React.Component {
  //This takes in one parameter in props, a lowercase name of the image. It then capitalizes the first letter and displays that as the name of the item
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className = "sidebar-button">
        <img className = "sidebar-button-icon" src = {require("./../../../images/SidebarIcons/" + this.props.type + ".png").default}></img>
        <p>{capitalizeFirstLetter(this.props.type)}</p>
      </div>
    )
  }
}

export default SidebarButton;
