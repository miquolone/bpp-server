// let player;
//
// /**
//  * @param play Bool
//  */
// function playMovie(play) {
//   const playerElement = document.querySelector( '#backgroundYoutubePlayer' );
//   if ( play ) {
//     player.hasOwnProperty( 'playVideo' ) && player.playVideo();
//     playerElement.style.opacity = 1;
//   } else {
//     player.hasOwnProperty( 'stopVideo' ) && player.stopVideo();
//     playerElement.style.opacity = 0;
//   }
// }
//
// window.addEventListener( "load", (event) => {
//
//   console.log( "[+] loaded movie observer start" );
//
//   function intersectionCallback(entries) {
//     entries.forEach( entry => {
//       playMovie( entry.isIntersecting );
//     } );
//   }
//
//   const observer = new IntersectionObserver( intersectionCallback, { threshold: [ 0, 0.01, 1.0 ], rootMargin: '0% 0px' } );
//   observer.observe( document.querySelector( "header" ) );
// } );
// ///document.addEventListener('visibilitychange', e => {console.log(e)}, false);
