import React from "react";

export const CoreContext = React.createContext();

export const CoreContextProvider = (props) => {
  return (
    <CoreContext.Provider value={props}>{props.children}</CoreContext.Provider>
  );
};

export default CoreContextProvider;
