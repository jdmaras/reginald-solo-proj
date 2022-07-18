import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="inputContainer">
      <div className="inputCard">
        <div className="text-3xl my-2">
          Welcome Razor Blade {user.username}!
        </div>
        <div className="text-2xl my-2">Your User ID is: {user.id}</div>
        <LogOutButton className="btn" />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
