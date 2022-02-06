import { useEffect } from 'react';
import YouTube from 'react-youtube';

const MainComponent = () => {

  useEffect( () => {
  }, [] );

  const VIDEOID = "86ysdmDYVzw";

  const opts = {
    playerVars: {
      playsinline: 1,
      loop: 1,
      rel: 0,
      seekTo: 0,
      start: 0,
      end: 64,
      controls: 0
    }
  };

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

  function onPlayerHandle(event) {
    if ( event.target.getPlayerState() === 0 ) {
      event.target.mute();
      event.target.playVideo();
    }
  }

  return (
    <>
      <div id="backgroundYoutubePlayerUnVisibler ">
        <div id="backgroundYoutubePlayer">&emsp;
          <YouTube
            videoId={ VIDEOID }
            id={ 'backgroundYoutubePlayer' }
            // containerClassName={ string }
            opts={ opts }
            onReady={ onPlayerReady }
            onPlay={ () => {console.log( 'playing' );} }
            onPause={ () => {console.log( 'pause' );} }
            onEnd={ onPlayerHandle }
            onStateChange={ onPlayerReady }
          />
        </div>
        <div id="youtubeWrap">
          <div id="youtubeWrapR">
            <div className="wallUpper">&emsp;</div>
            <div className="wallUnder">&emsp;</div>
          </div>
          <div id="youtubeWrapL">
            <div className="wallUpper">&emsp;</div>
            <div className="wallUnder">&emsp;</div>
          </div>
        </div>
      </div>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <section className="memberActivity">
          <h2>BPP</h2>
          <div className={ "p2" }>
            <div className="corporate_information message">
              ようこそ,Beautiful Planets Projectへ！ <br/>

              BPPは、CG制作の初心者から熟練者までが集まるコミュニティです。<br/>

              Blenderへの貢献を目的としてCG惑星100個を制作とNFTを公開を進めています。 <br/>

              惑星は想像上、架空の惑星でOK！🪐惑星と思えれば良いので、ほとんどルールはありません。（一度うめちゃんがチェックは入れます）

              惑星はみんなが集まってくれて活動してくれた証になります。みんなで100個の惑星がつくれたらきっと素晴らしい宝物になるし、そこまでの過程を楽しみたいです。

              もう一つの目標として、このコミュニティで創作をしたいです。既にマスコットキャラクターのパルサーちゃんが誕生しています。そしてその仲間も。みんなこのコミュニティメンバーによって生み出されています。

              Blenderに限らず、みんなが大好きなこと、得意なことを持ち寄って、新しいことやワクワクすることをやっていきたいです！✨

              <a className="t_w" href={ 'https://discord.com/channels/895078439709708318/895078442637336628' }> Discord で話しましょう </a>

            </div>
          </div>
        </section>
      </main>

      <footer>
        &emsp;
      </footer>
    </>
  );
};

export default MainComponent;