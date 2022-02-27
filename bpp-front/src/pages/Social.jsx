import { useEffect, useState } from 'react';
import WakuComponent from '../components/wakuComponent';

const Social = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru( "social" );
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
          S.O.C.I.A.L
        </div>
      </aside>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <div Style={ "display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;" }>
          {
            [
              { image: "/assets/images/ume.webp", title: "ABC", description: "dEF" },
              { image: "/assets/images/ume.webp", title: "ABC", description: "dEF" },
              { image: "/assets/images/ume.webp", title: "ABC", description: "dEF" },
              { image: "/assets/images/ume.webp", title: "ABC", description: "dEF" }
            ].map( (member) => {
              return <WakuComponent member={ member }/>;
            } )
          }
        </div>
      </main>
    </>
  );
};

export default Social;
