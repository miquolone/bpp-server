import { Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './pages/Home';
import MainComponent from './pages/Main';
import StoreComponent from './pages/Store';
import SocialComponent from './pages/Social';
import TransactionComponent from './pages/Transaction';
import ContactComponent from './pages/Contact';
import OrganizeComponent from './pages/Organize';

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
        <Route path="organize" element={ <OrganizeComponent/> }>
          <Route path=":hash" element={ <OrganizeComponent/> }/>
        </Route>
        <Route path="contact" element={ <ContactComponent/> }>
          <Route path=":hash" element={ <ContactComponent/> }/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;