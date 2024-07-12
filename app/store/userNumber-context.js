import { createContext, useContext, useRef, useState } from "react";

export const UserNumberContext = createContext({
  userNumber: "",
  setUserNumber: () => {},
  inpRef: "",
  resetUserNumber: () => {},
});

export const UserNumberContextProvider = ({ children }) => {
  const inpRef = useRef(null);
  const [userNumber, setUserNumber] = useState("");

  const resetUserNumber = () => {
    setUserNumber(null);
    inpRef?.current?.clear();
  };

  const value = {
    userNumber,
    setUserNumber,
    inpRef,
    resetUserNumber,
  };

  return (
    <UserNumberContext.Provider value={value}>
      {children}
    </UserNumberContext.Provider>
  );
};

export const useUserNumberContext = () => {
  return useContext(UserNumberContext);
};
