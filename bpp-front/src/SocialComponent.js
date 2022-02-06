import { useEffect, useState } from 'react';

const SocialComponent = () => {

  const [ circleRotateClassName, setCircleRotateClass ] = useState( "" );

  useEffect( () => {
    setTimeout( () => {
      setCircleRotateClass( 'gandam-transform' );
      console.log( 'Initial timeout!' );
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
          S.O.C.I.A.L
        </p>
      </aside>


      {/*// ダミー いただいている自己紹介を載せていく場所に*/ }
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>
      <section className="activity">
        <div className="flex-center">
          <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" } alt={ "" }/>
        </div>
      </section>

    </>
  );
};

export default SocialComponent;
