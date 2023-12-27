import { useState } from "react";
import "./index.css";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import SideBar from "./componenets/SideBar";
import SubMenu from "./componenets/SubMenu";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Hero />
      <SubMenu />
    </>
  );
}

export default App;
