import { Outlet } from "react-router-dom";
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import SplashWindowComponent from '../components/SplashWindowComponent';
import { createContext, useState, useEffect } from 'react';
import { table, minifyRecords } from '../lib/airtable';

export const AirtableContext = createContext( {} );

const Home = () => {

  const [ airtableData, setAirtableData ] = useState( {} );

  useEffect( () => {
    table.select( {} ).all().then( async records => {
      const minifiedRecords = await minifyRecords( records );
      airtableData.members = minifiedRecords;
      setAirtableData( airtableData );
    } );
  }, [airtableData, setAirtableData] );

  return (
    <>
      <SplashWindowComponent/>

      <NavbarComponent/>

      <AirtableContext.Provider value={ airtableData }>
        <Outlet/>
      </AirtableContext.Provider>

      <FooterComponent/>
    </>
  );
};

export default Home;
