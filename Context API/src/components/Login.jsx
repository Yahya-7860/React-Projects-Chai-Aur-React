import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setdata } = useContext(UserContext);

  const SubmitHandle = (e) => {
    e.preventDefault();
    setdata({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      {" "}
      <button onClick={SubmitHandle}>Submit</button>
    </div>
  );
}
