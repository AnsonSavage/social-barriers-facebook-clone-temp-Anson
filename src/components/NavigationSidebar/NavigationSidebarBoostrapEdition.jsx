import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
          <div>
            <ul class="nav flex-column">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/pages/Home" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pages/Home">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/pages/Friends" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pages/Friends">
                  Friends
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/pages/Groups" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pages/Groups">
                  Groups
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/pages/Events" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pages/Events">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
