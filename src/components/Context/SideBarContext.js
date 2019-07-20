import React, { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [onClickHover, setOnClickHover] = useState(false);
  const handleOnClickHover = target => {
    setOnClickHover(!onClickHover);
  };
  return (
    <UserContext.Provider
      value={{
        handleOnClickHover,
        onClickHover
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const handleOnClickHover = () => {
  //해당 파일에서 usercontext로 받아오는 문법
  const { onClickHover } = useContext(SideBarContext);
  return onClickHover;
};
