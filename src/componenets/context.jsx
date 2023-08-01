import React, { useState } from "react";
import sublinks from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsideBarOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);

  const openSideBar=()=>{
    setIsSideBarOpen(true)
  }
  const closeSideBar=()=>{
setIsSideBarOpen(false)
  }
  const openModal=()=>{
    setiSModalOpen(true)
  }
  const closeModal=()=>{
setIsModalOpen(false)

  return <AppContext.Provider>{children}</AppContext.Provider>;
};
