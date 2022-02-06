import { Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './Home';
import MainComponent from './MainComponent';
import StoreComponent from './StoreComponent';
import SocialComponent from './SocialComponent';
import TransactionComponent from './TransactionComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }>
        <Route index element={ <MainComponent/> }/>
        <Route path="store" element={ <StoreComponent/> }>
          <Route path=":nftId" element={ <StoreComponent/> }/>
        </Route>
        <Route path="social" element={ <SocialComponent/> }>
          <Route path=":name" element={ <SocialComponent/> }/>
        </Route>
        <Route path="transaction" element={ <TransactionComponent/> }>
          <Route path=":hash" element={ <TransactionComponent/> }/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;