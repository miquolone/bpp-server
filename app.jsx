import { serve } from "https://deno.land/std@0.122.0/http/server.ts";
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import * as path from 'path';

const openSea = {
  nft: {
    planets: [
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662286144837779457',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662287244349407233',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662288343861035009',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662297139954057217',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662277348744757249',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662283945814523905',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662285045326151681',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662301538000568321',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662298239465684993',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662299338977312769',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662300438488940545',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662289443372662785',
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662290542884290561'
    ]
  }
};

const OpenSeaPlanets = () => {
  const [ nftPlanets ] = React.useState( openSea );

  React.useEffect( () => {
  }, [] );

  return (
    <section className="activity">
      <h2>Planets</h2>
      <p>
        {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
        {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
        {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
      </p>
      <div className="activity_contents">
        {
          nftPlanets.nft.planets.map( (v) => {
            const url = new URL( v );
            const patternResolve = url.pathname.match( new RegExp( /.*assets\/(0x.*?)\/(.*)/ ) );
            if ( patternResolve ) {
              const [ , contractAddress, tokenId ] = patternResolve;
              return (
                <div key={ contractAddress }>
                  <nft-card vertical contractAddress={ contractAddress } tokenId={ tokenId }/>
                </div>
              );
            }
          } )
        }
      </div>
    </section>
  );
};


const OpenSeaCharacter = () => {
  const openSea = {
    nft: {
      celestials: [
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662292741907546113',
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662293841419173889',
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662294940930801665',
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662296040442429441',
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68029628652796512442132285988694870032096907384190819011746662291642395918337'
      ]
    }
  };
  const [ nftPlanets, setNftPlanets ] = React.useState( openSea );

  return (
    <section className="activity">
      <h2>CELESTIALS</h2>
      <p>
        {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
        {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
        {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
      </p>
      <div className="activity_contents">
        {
          nftPlanets.nft.celestials.map( (v) => {
            const url = new URL( v );
            const patternResolve = url.pathname.match( new RegExp( /.*assets\/(0x.*?)\/(.*)/ ) );
            if ( patternResolve ) {
              const [ , contractAddress, tokenId ] = patternResolve;
              return (
                <div key={ contractAddress }>
                  <nft-card vertical contractAddress={ contractAddress } tokenId={ tokenId }/>
                </div>
              );
            }
          } )
        }
      </div>
    </section>
  );
};


const BPP = ({ title, children }) => (
  <html className="bg_skew_border">
    <head>
      <title>{ title }</title>
      <title>BPP のWeb Ver2</title>
      <meta name="viewport" content="width=device-width"/>
      <meta content="#6307c0" name="apple-mobile-web-app-status-bar-style"/>
      <meta content="#6307c0" name="msapplication-navbutton-color"/>
      <meta content="#6307c0" name="msapplication-TileColor"/>
      <meta content="________________________" name="description"/>
      <meta content="BPP" name="keywords"/>
      <meta property="og:type" content="WebSite"/>
      <meta property="og:image" content=""/>
      <meta content="summary_large_image" name="twitter:card"/>
      <meta content="@_______" name="twitter:creator"/>
      <script src="https://unpkg.com/three@0.131.3/build/three.min.js"/>
      <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"/>

      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

      <script src="/libs/simpleParallax.min.js"/>
      <script src="/scripts/threeExample.js"/>
      <script src="/scripts/palaraxBuilding.js"/>
      <script src="/scripts/youtube.js"/>

      <link rel="icon" href="/images/favicon.png"/>
      <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
      <link href="/styles/style.css" rel="stylesheet"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <script src="/scripts/particle.js"/>
    </head>
    <body>
      <div id="particles-js"></div>
      { children }
    </body>
  </html>
);

const Main = () => {
  return (
    <>
      <div id="overWallCover">
        <img src="https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"/>
      </div>

      <nav className="flex">
        <a href={ "/" }> <img className="logo_img" src="/images/bpp_150_alpha.png"/> </a>
        <div className={ "link" }> | HOME | STORE | SOCIALS |</div>
      </nav>

      <div id="backgroundYoutubePlayerUnVisibler ">
        <div id="backgroundYoutubePlayer">&emsp;</div>
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

      <header>&emsp;</header>

      <main>

        <OpenSeaCharacter/>

        <div className="samePlanets">
          <canvas id="myCanvas">&emsp</canvas>
        </div>

        <OpenSeaPlanets/>

        <section className="memberActivity">
          <h2>BPPは友達を集めてるよ</h2>
          <div className="flex-center p1">
            <p className="memberIcon">
              <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" }/>
            </p>
          </div>

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
        </section>
      </main>

      <footer>
        &emsp;
      </footer>
    </>
  );
};

/* @ts-ignore */
async function HTTPRequestHandler(req) {
  const { pathname } = new URL( req.url );
  const patternResolve = pathname.match( new RegExp( /.*(\..*)/ ) );
  if ( patternResolve ) {
    const [ , extension ] = patternResolve;
    const mimeList = {
      ".png": "application/image",
      ".ico": "application/image",
      ".svg": "image/svg+xml",
      ".css": "text/css",
      ".js": "text/javascript"
    };
    console.log( "1111", pathname );
    if ( pathname == "/favicon.ico" ) {
      pathname = "/favicon.png";

    }
    const file = await Deno.readFile( "./assets/" + pathname );

    console.log( "2222", pathname );
    try {
      return new Response( file, {
        headers: { "content-type": mimeList[ extension ] }
      } );
    } catch ( e ) {
      console.log( 'おやや？', e );
    }
  }

  const html = ReactDOMServer.renderToString( <BPP title="bpp"><Main/></BPP> );
  return new Response( html, {
    headers: { "content-type": "text/html; charset=utf-8" }
  } );
}

console.log( "Listening on http://localhost:8000" );
serve( HTTPRequestHandler );
