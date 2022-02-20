import { useEffect } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';


// const countAtom = atom(0)
// const countryAtom = atom('Japan')
// const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
// const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, Naruto: 1999 })

const splashedAtom = atomWithStorage( 'splashed', false );

const SplashWindowComponent = () => {
  const [ splashed, setSplashed ] = useAtom( splashedAtom );

  const LoadingParcentage = styled.p( props => ( {
    fontSize: "1.2rem"
  } ) );
  const CharacterAuthor = styled.p( props => ( {
    fontSize: "1rem"
  } ) );

  useEffect( () => {
    if ( !splashed ) {
      console.log( '[+] Splash init' );
      document.querySelector( '#overWallCoverInner' ).classList.add( 'expand1s' );
      document.querySelector( '#overWallCoverInner' ).style.backgroundColor = '#000';
      setTimeout( () => {
        document.querySelector( '#overWallCoverInner' ).style.width = '100%';
        document.querySelector( '#overWallCoverInner' ).style.border = '0';
        document.querySelector( '#overWallCoverInner' ).style.height = '100%';
        document.querySelector( '#overWallCoverInner img' ).classList.add( 'hide2s' );
        document.querySelector( '#overWallCover' ).classList.add( 'hide1s' );
        // setSplashed( true );
        setSplashed( true );
      }, 1000 );
    }
  }, [] );

  return (
    <>
      {
        !splashed ?
          <div id="overWallCover">
            <div id="overWallCoverInner">
              <img alt="" src="https://media.discordapp.net/attachments/932636979374477362/943141661255561256/PULSACHAN_alpha.png"/>
              <LoadingParcentage className={ "loadingPercentage" }>100%</LoadingParcentage>
              <CharacterAuthor className={ "splashCreator" }>BPP-Attender authored @De</CharacterAuthor>
            </div>
          </div>
          :
          <></>
      }
    </>
  );
};

export default SplashWindowComponent;