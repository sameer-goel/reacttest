import React from "react";
import { useHistory, NavLink } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push("/")}> Home</button>
      <br />
      <a href="/" onClick={() => history.push("/")}>
        <img
          src="https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages-1112x556.jpg"
          alt="404"
        />
      </a>
      <a href="/">
        <img
          src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
          alt="404"
        />
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
      </a>
    </>
  );
};

export default Error;
