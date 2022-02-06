import { useEffect, useState } from 'react';

const SocialComponent = () => {

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
        <p className="circleRotateClassWrapInnterText">S.O.C.I.A.L</p>
      </aside>

      <div className="samePlanets">
        <canvas id="myCanvas">&emsp</canvas>
      </div>

      <div className="samePlanets">
        <canvas id="myCanvas">&emsp</canvas>
      </div>

      <div className="flex-center">
        <p className="memberIcon">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </p>
      </div>

    </>
  );
};

export default SocialComponent;
