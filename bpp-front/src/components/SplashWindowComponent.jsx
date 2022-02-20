import { useEffect } from 'react';
import styled from 'styled-components';

const SplashWindowComponent = () => {

  const SplashCharacter = styled.img( props => ( { background: props.background } ) );
  const LoadingParcentage = styled.p( props => ( {
    fontSize: "1.2rem"
  } ) );
  const CharacterAuthor = styled.p( props => ( {
    fontSize: "1rem"
  } ) );

  useEffect( () => {
    console.log( '[+] Splash init' );
    document.querySelector( '#overWallCover #step2 img' )?.classList.add( 'hide2s' );
    setTimeout( () => {
      document.querySelector( '#overWallCover' ).classList.add( 'hide1s' );
    }, 3000 );

  }, [] );

  return (
    <>
      <div id="overWallCover">
        <div id="overWallCoverInner">
          <SplashCharacter alt="" src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png"/>
          {/*<SplashCharacter alt="" src="https://cdn.discordapp.com/icons/895078439709708318/ef2465a8d14d0f299ad248bf70c72bbe.webp"/>*/ }
          <LoadingParcentage className={ "loadingPercentage" }>100%</LoadingParcentage>
          <CharacterAuthor className={ "splashCreator" }>BPP-Attender authored @De</CharacterAuthor>
        </div>
      </div>
    </>
  );
};

export default SplashWindowComponent;