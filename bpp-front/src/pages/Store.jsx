import OpenSeaCharacter from '../components/OpenSeaCharacter';
import OpenSeaPlanets from '../components/OpenSeaPlanets';
import { useEffect, useState } from 'react';

const Store = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru();
    window.particleInit();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <div className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          S.T.O.R.E
        </div>
      </aside>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <OpenSeaCharacter/>

        <OpenSeaPlanets/>
      </main>

    </>
  );
};

export default Store;
