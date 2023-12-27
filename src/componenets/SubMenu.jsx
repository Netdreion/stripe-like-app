import React, { useState, useRef, useEffect } from "react";

import { useGlobalContext } from "./context";

const SubMenu = () => {
  const { isSubMenuOpen } = useGlobalContext;
  return (
    <aside className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}></aside>
  );
};

export default SubMenu;
