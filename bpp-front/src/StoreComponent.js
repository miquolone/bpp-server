import OpenSeaCharacter from './OpenSeaCharacter';
import OpenSeaPlanets from './OpenSeaPlanets';
import { useEffect, useState } from 'react';

const StoreComponent = () => {
  const [ gandamClassName, setGandamClassName ] = useState( "gandam" );

  useEffect( () => {
    setTimeout( () => {
      setGandamClassName( 'gandam-transform' );
      console.log( 'Initial timeout!' );
    }, 10 );
  }, [] );

  return (
    <>
      <div className={ gandamClassName }/>
      <OpenSeaCharacter/>

      <div className="samePlanets">
        <canvas id="myCanvas">&emsp</canvas>
      </div>

      <OpenSeaPlanets/>

    </>
  );
};

export default StoreComponent;
