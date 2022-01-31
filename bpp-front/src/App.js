import { Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './Home';
import MainComponent from './MainComponent';
import ShopComponent from './ShopComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }>
        <Route index element={ <MainComponent/> }/>
        <Route path="shop" element={ <ShopComponent/> }>
          <Route path=":nftId" element={ <ShopComponent/> }/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;