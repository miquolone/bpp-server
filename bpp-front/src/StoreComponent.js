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
        <p className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          S.T.O.R.E
        </p>
      </aside>


      <OpenSeaCharacter/>

      <OpenSeaPlanets/>

    </>
  );
};

export default StoreComponent;
