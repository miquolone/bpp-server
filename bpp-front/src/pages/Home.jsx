import { Outlet } from "react-router-dom";
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import SplashWindowComponent from '../components/SplashWindowComponent';
import { createContext, useState, useEffect } from 'react';
import { table, minifyRecords } from '../lib/airtable';

export const AirtableContext = createContext( 'airtableの値を持ち回ろう' );
const Home = () => {
  const [ data, setData ] = useState( [] );
  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      setData( minifiedRecords );
    } );
  }, [ setData ] );

  return (
    <>
      <SplashWindowComponent/>

      <NavbarComponent/>

      <AirtableContext.Provider value={ data }>
        <Outlet/>
      </AirtableContext.Provider>

      <FooterComponent/>
    </>
  );
};

export default Home;
