import { Outlet } from "react-router-dom";
import React from 'react';

function Home() {
  return (
    <>
      <div id="particles-js"/>
      <Outlet/>
    </>
  );
}

export default Home;
