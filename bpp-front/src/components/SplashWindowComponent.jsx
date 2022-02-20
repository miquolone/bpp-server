import { useEffect } from 'react';
import styled from 'styled-components';

const SplashWindowComponent = () => {

  const LoadingParcentage = styled.p( props => ( {
    fontSize: "1.2rem"
  } ) );
  const CharacterAuthor = styled.p( props => ( {
    fontSize: "1rem"
  } ) );

  useEffect( () => {
    console.log( '[+] Splash init' );
    setTimeout( () => {
      document.querySelector( '#overWallCoverInner img' ).classList.add( 'hide2s' );
      document.querySelector( '#overWallCover' ).classList.add( 'hide1s' );
    }, 1000 );

  }, [] );

  return (
    <>
      <div id="overWallCover">
        <div id="overWallCoverInner">
          <img alt="" src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png"/>
          <LoadingParcentage className={ "loadingPercentage" }>100%</LoadingParcentage>
          <CharacterAuthor className={ "splashCreator" }>BPP-Attender authored @De</CharacterAuthor>
        </div>
      </div>
    </>
  );
};

export default SplashWindowComponent;