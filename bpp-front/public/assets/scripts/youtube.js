const VIDEOID = "86ysdmDYVzw";

const tag = document.createElement( "script" );
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName( "script" )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

let player;

console.log( "[+] youtube init" );

function onYouTubeIframeAPIReady() {
  player = new YT.Player( "backgroundYoutubePlayer", {
    videoId: VIDEOID,
    playerVars: {
      playsinline: 1,
      loop: 1,
      rel: 0,
      seekTo: 0,
      start: 0,
      end: 64,
      controls: 0
    },
    events: {
      "onReady": onPlayerReady,
      "onStateChange": onPlayerHandle
    }
  } );
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

function onPlayerHandle(event) {
  if ( event.target.getPlayerState() === YT.PlayerState.ENDED ) {
    event.target.mute();
    event.target.playVideo();
  }
}

/**
 * @param play Bool
 */
function playMovie(play) {
  const playerElement = document.querySelector( '#backgroundYoutubePlayer' );
  if ( play ) {
    player.hasOwnProperty( 'playVideo' ) && player.playVideo();
    playerElement.style.opacity = 1;
  } else {
    player.hasOwnProperty( 'stopVideo' ) && player.stopVideo();
    playerElement.style.opacity = 0;
  }
}

window.addEventListener( "load", (event) => {

  console.log( "[+] loaded movie observer start" );

  function intersectionCallback(entries) {
    entries.forEach( entry => {
      playMovie( entry.isIntersecting );
    } );
  }

  const observer = new IntersectionObserver( intersectionCallback, { threshold: [ 0, 0.01, 1.0 ], rootMargin: '0% 0px' } );
  observer.observe( document.querySelector( "header" ) );

}, false );

///document.addEventListener('visibilitychange', e => {console.log(e)}, false);
