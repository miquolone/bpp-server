import { useEffect, useState } from 'react';

const Contact = () => {

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
        <p className="circleRotateClassWrapInnterText">
          <div className="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>
          C.O.N.T.A.C.T
        </p>
      </aside>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <section className="activity flex-center">
          <div className={ "p3" }>
            <a className="t_w" href={ 'https://discord.com/channels/895078439709708318/895078442637336628' }> Discord でお話しましょう </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
