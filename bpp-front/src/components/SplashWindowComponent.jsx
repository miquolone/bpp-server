import { useEffect } from 'react';

const SplashWindowComponent = () => {
  useEffect( () => {
    console.log( '[+] Splash init' );

    document.querySelector( '#overWallCover img' )?.classList.add( 'hide1s' );
    setTimeout( () => {
      document.querySelector( '#overWallCover' ).classList.add( 'hide1s' );
    }, 1000 );

  }, [] );

  return (
    <>
      <div id="overWallCover">
        <div id="overWallCoverInner">
          <img alt="" src="https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"/>
        </div>
      </div>
    </>
  );
};

export default SplashWindowComponent;