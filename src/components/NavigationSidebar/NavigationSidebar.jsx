import React from "react";
import { Link, withRouter } from "react-router-dom";
import SidebarButton from "./SidebarButton/SidebarButton";
import "./NavigationSidebar.css";

function Navigation(props) {
  return (
    <div>
      <nav>
        <div class="container">
          <div className = "sidebar-buttons-container">
            <SidebarButton type = "friends"/>
            <SidebarButton type = "groups"/>
            <SidebarButton type = "events"/>
            <SidebarButton type = "favorites"/>
            <SidebarButton type = "marketplace"/>
            <SidebarButton type = "watch"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
