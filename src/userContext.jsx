import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("1"); // 기본 userId 설정

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};