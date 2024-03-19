import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [data, setdata] = useState(null);

  return (
    <UserContext.Provider value={{ data, setdata }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
