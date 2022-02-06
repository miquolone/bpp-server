import { Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './Home';
import MainComponent from './MainComponent';
import StoreComponent from './StoreComponent';
import SocialComponent from './SocialComponent';
import TransactionComponent from './TransactionComponent';
import ContactComponent from './ContactComponent';
import OrganizeComponent from './OrganizeComponent';

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