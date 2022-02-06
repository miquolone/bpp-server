import { useEffect } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

const MainComponent = () => {

  useEffect( () => {

    const date = new Date();
    date.setMonth( date.getMonth() + 1 );
    date.setDate( 0 );

    document.querySelectorAll( [ '.wallUpper', '.wallUnder' ] ).forEach( wall => {
      setTimeout( () => {
        wall.classList.add( 'hide' );
      }, Math.LOG10E * Math.random() * date.getDate().toString() * Math.random( 200 ) * 200 );
    } );

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
      <div>
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
            {/*<div className="wallUpper">&emsp;</div>*/ }
            {/*<div className="wallUnder">&emsp;</div>*/ }
          </div>
          <div id="youtubeWrapL">
            {/*<div className="wallUpper">&emsp;</div>*/ }
            {/*<div className="wallUnder">&emsp;</div>*/ }
          </div>
        </div>
      </div>

      <header>&emsp;
        <div id="particles-js"/>
      </header>

      <main>
        <section>
          <h2>BPP</h2>
          <div className={ "p2" }>
            <div className="corporate_information">
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

        <section>
          <h2>BlenderへのTransaction履歴</h2>
          <div className={ "p2" }>
            <div className="corporate_information">
              2022年1月、BPP組成から２ヶ月でBlenderに初めてのTransactionを作成しました。<br/>
              かねてよりの第一目標であったBlenderへの寄付が実現され、私たちの目標がいっぽ前進しました。
              この時のTransactionを円に換算すれば時価は8,000円ほどになります。これはNFTをご購入をいただいた額から経費を差し引いた額となりますので、
              多くの購入者に支えられていること、並びに日頃お世話になっているBlenderへの貢献がスタートできたことを嬉しく思います。
              <Link to="transaction">トランザクション履歴</Link>や <a
              href="https://etherscan.io/tx/0x68bce054b5e4ac72ce8ec2c96120792ed8a911204e8c0ee32785bc6b1956827c">EthScan（外部サイト）</a>
              からもご確認いただくことが可能です。
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default MainComponent;