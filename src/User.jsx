import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = (porps) => {
  const { fname, lname } = useParams();
  const loc = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        Username is {porps.greet} {fname} {lname}
      </h1>
      <h3>My Location is :{loc.pathname}</h3>
      {loc.pathname === `/user/Sameer/Goel` ? <button>WoW!!</button> : null}
      <button onClick={() => history.goBack()}> Back</button>
      <button onClick={() => history.push("/Contact")}> ContactUs</button>
    </>
  );
};

export default User;
