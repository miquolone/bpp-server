import { useEffect, useState } from 'react';

const ContactComponent = () => {

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
          C.O.N.T.A.C.T
        </p>
      </aside>

      <section className="activity flex-center">
        <div className={ "p3" }>
          <a className="t_w" href={ 'https://discord.com/channels/895078439709708318/895078442637336628' }> Discord でお話しましょう </a>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
