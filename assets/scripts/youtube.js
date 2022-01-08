///document.addEventListener('visibilitychange', e => {console.log(e)}, false);
const tag = document.createElement( "script" );
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName( "script" )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player( "backgroundYoutubePlayer", {
    videoId: "eY58zNPsOJc",
    playerVars: {
      playsinline: 1,
      loop: 1,
      rel: 0,
      // seekTo: 58,
      // start: 58,
      // end: 60,
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
  }
}

/**
 * @param play Bool
 */
function showVideoPlayer(play) {
  if ( play ) {
    player.loaded && player.playVideo();
  } else {
    player.stopVideo();
  }
}

globalThis.addEventListener( "load", (event) => {

  function intersectionCallback(entries) {
    entries.forEach( entry => {
      console.log( entry );
      showVideoPlayer( entry.isIntersecting );
      if ( entry.intersectionRatio >= 0.75 ) {
        console.log( 'isIntersecting', entry.isIntersecting );
      }
    } );
  }

  const observer = new IntersectionObserver( intersectionCallback, { threshold: [ 0, 0.5, 1.0 ], rootMargin: '-0% 0px' } );
  observer.observe( document.querySelector( "header" ) );

}, false );
