import { Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './Home';
import MainComponent from './MainComponent';
import StoreComponent from './StoreComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }>
        <Route index element={ <MainComponent/> }/>
        <Route path="store" element={ <StoreComponent/> }>
          <Route path=":nftId" element={ <StoreComponent/> }/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;