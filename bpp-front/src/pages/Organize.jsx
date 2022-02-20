import { useEffect, useState } from 'react';

const OrganizeComponent = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
    }, 10 );

    window.init_cube_kurukuru("organize");
    window.particleInit();
  }, [] );

  return (
    <>
      <aside className="circleRotateClassWrap">
        <div className={ circleRotateClassName }/>
        <span className={ "runrunrunrunrunrunrunrunrun" }/>
        <div className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          O.R.G.A.N.I.Z.E
        </div>
      </aside>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <section className="activity">
          <div className="flex-center">
            <p className={ "message" }>BPPは〜〜〜〜〜どんなとこ？について記載する</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrganizeComponent;
