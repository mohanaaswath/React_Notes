import React, { createContext } from "react";
import Welcomepage from "./Welcomepage";
export const userContext = createContext();

const UserProvider = () => {
  const user = { name: "mohan", id: 1 };
  return (
    <userContext.Provider value={user}>
      <Welcomepage />
    </userContext.Provider>
  );
};

export default UserProvider;
