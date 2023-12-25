import React, { useState, useContext } from "react";
import sublinks from "../data";

const AppContext = React.createContext();

export const AppProvider = (children) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        openSideBar,
        closeSideBar,
        openSubMenu,
        closeSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlabalContext = () => {
  return useContext(AppContext);
};
