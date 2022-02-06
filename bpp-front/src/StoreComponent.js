import OpenSeaCharacter from './OpenSeaCharacter';
import OpenSeaPlanets from './OpenSeaPlanets';
import { useEffect, useState } from 'react';

const StoreComponent = () => {
  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
      console.log( 'Initial timeout!' );
    }, 10 );
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <p className="circleRotateClassWrapInnterText">S.T.O.R.E</p>
      </aside>

      <OpenSeaCharacter/>

      <div className="samePlanets">
        <canvas id="myCanvas">&emsp</canvas>
      </div>

      <OpenSeaPlanets/>

    </>
  );
};

export default StoreComponent;
