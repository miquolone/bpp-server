import { useEffect, useState } from 'react';

const OrganizeComponent = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <p className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          O.R.G.A.N.I.Z.E
        </p>
      </aside>

      <section className="activity">
        <div className="flex-center">
          <p className={ "corporate_information" }>BPPは〜〜〜〜〜どんなとこ？について記載する</p>
        </div>
      </section>
    </>
  );
};

export default OrganizeComponent;
