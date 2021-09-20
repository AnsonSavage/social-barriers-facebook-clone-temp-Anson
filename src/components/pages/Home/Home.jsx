import React from "react";
import NavigationSidebar from "./../../NavigationSidebar/NavigationSidebar";
import "./Home.css"



function Home(props) {
  return (
    <div className = "home">
      <NavigationSidebar />
      <div className = "content">
        <p>This is where the posts will go!</p>
      </div>
    </div>
  );
}


export default Home;
