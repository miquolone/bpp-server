const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("backgroundYoutubePlayer", {
    videoId: "eY58zNPsOJc",
    playerVars: {
      playsinline: 1,
      loop: 1,
      listType: "playlist",
      playlist: "eY58zNPsOJc",
      rel: 0,
      controls: 0,
    },
    events: {
      "onReady": onPlayerReady,
      "onStateChange": onPlayerHandle,
    },
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

function onPlayerHandle(event) {
  if (event.target.getPlayerState() == YT.PlayerState.ENDED) {
    event.target.mute();
    event.target.playVideo();
  }
}
