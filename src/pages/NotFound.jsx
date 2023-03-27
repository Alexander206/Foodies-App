import React, { useContext } from "react";
import { userContext } from "../routes/App";

export const NotFound = () => {
  const { user, updateUser } = useContext(userContext);

  console.log(user);

  return <h1>NotFound</h1>;
};
