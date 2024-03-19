import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { data } = useContext(UserContext);

    if(!data)
      return <div>Please Login</div>

  return <div>Welcome {data.username} </div>;
}
