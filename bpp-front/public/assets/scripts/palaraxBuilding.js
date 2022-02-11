window.addEventListener( "load", () => {
  console.log( '[+] BPP init' );
  document.querySelector( '#overWallCover' )?.classList.add( 'hide' );
  document.querySelector( '#overWallCover img' )?.classList.add( 'hide1s' );


  /// Youtubeわく専用 動画はpip で表示する
  function intersectionCallback(entries) {
    entries.forEach( entry => {

      if ( !entry.isIntersecting ) {
        document.querySelector( '#backgroundYoutubePlayer' ).classList.add( 'backgroundYoutubePlayerScrolled' );
      } else {
        document.querySelector( '#backgroundYoutubePlayer' ).classList.remove( 'backgroundYoutubePlayerScrolled' );
      }
    } );
  }

  const observer = new IntersectionObserver( intersectionCallback, { threshold: [ 0, 0.01, 1.0 ], rootMargin: '0% 0px' } );
  observer.observe( document.querySelector( "header" ) );

  document.addEventListener( 'visibilitychange', e => {console.log( e );}, false );

}, false );

