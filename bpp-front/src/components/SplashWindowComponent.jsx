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
          <img alt="" src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png"/>
          <p className={ "loadingPercentage" }>100%</p>
          <p className={ "splashCreator" }>@De</p>
        </div>
      </div>
    </>
  );
};

export default SplashWindowComponent;