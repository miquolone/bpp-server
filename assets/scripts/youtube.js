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
  if ( event.target.getPlayerState() == YT.PlayerState.ENDED ) {
    event.target.mute();
  }
}

/**
 *
 * playerの停止と再生（0秒から）を操作する
 * 大画面時にmain髪切れる仕様なので、
 * スクロール時はカバーが表示されるようにした。
 *
 */
function showVideoPlayer(play) {
  if ( play ) {
    player.playVideo();
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

  const option = {
    rootMargin: "10px 2px",
    threshold: [ 0, 0.5, 1.0 ],
    rootMargin: '-0% 0px'
  };

  const observer = new IntersectionObserver( intersectionCallback, option );
  observer.observe( document.querySelector( "header" ) );

}, false );
