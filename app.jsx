/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import { listenAndServe } from "https://deno.land/std@0.119.0/http/mod.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.27/mod.ts";

function App() {
  return (
    <html class="bg_skew_border">
      <head>
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

        <script src="/libs/simpleParallax.min.js"/>
        <script src="/scripts/threeExample.js"/>
        <script src="/scripts/youtube.js"/>

        <link rel="icon" href="/images/favicon.png"/>
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
        <link href="/styles/style.css" rel="stylesheet"/>


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </head>

      <body>
        <div id="overWallCover">
          <img src="https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"/>
        </div>
        <nav class="flex">
          <a href={ "/" }> <img class="logo_img" src="/images/bpp_150_alpha.png"/> </a>
          <div class={ "link" }> | HOME | STORE | SOCIALS |</div>
        </nav>
        <div id="backgroundYoutubePlayerUnVisibler ">
          <div id="backgroundYoutubePlayer">&emsp;</div>
          <div id="youtubeWrap">
            <div id="youtubeWrapR">
              <div class="wallUpper">&emsp;</div>
              <div class="wallUnder">&emsp;</div>
            </div>
            <div id="youtubeWrapL">
              <div class="wallUpper">&emsp;</div>
              <div class="wallUnder">&emsp;</div>
            </div>
          </div>
        </div>

        <header>
        </header>

        <main>
          <section class="activity">
            <p>
              {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
              {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
              {/*キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載*/ }
            </p>
            <div class="activity_contents">
              <style>
              </style>
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662291642395918337"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662292741907546113"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662294940930801665"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662296040442429441"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662293841419173889"
              />
            </div>
          </section>

          <div class="samePlanets">
            <canvas id="myCanvas">&emsp</canvas>
          </div>

          <section class="activity">
            <h2>惑星</h2>
            <p>
              {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
              {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
              {/*惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載*/ }
            </p>
            <div class="activity_contents">
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662286144837779457"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662297139954057217"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662287244349407233"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662288343861035009"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662277348744757249"
              />
              <nft-card
                vertical=""
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662283945814523905"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662289443372662785"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662290542884290561"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662285045326151681"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662300438488940545"
              />
              <nft-card
                vertical
                contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
                tokenId="68029628652796512442132285988694870032096907384190819011746662298239465684993"
              />
            </div>
          </section>

          <section class="memberActivity">
            <h2>BPPは友達を集めてるよ</h2>
            <div class="flex-center" style="padding:1rem;">
              <p class="memberIcon">
                <img src={ "https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240" }/>
              </p>
            </div>
          </section>
          <section class="activity m0">
            <div class="corporate_information message">
              ようこそ,Beautiful Planets Projectへ！ <br/>

              BPPは、CG制作の初心者から熟練者までが集まるコミュニティです。<br/>

              Blenderへの貢献を目的としてCG惑星100個を制作とNFTを公開を進めています。 <br/>

              惑星は想像上、架空の惑星でOK！🪐惑星と思えれば良いので、ほとんどルールはありません。（一度うめちゃんがチェックは入れます）

              惑星はみんなが集まってくれて活動してくれた証になります。みんなで100個の惑星がつくれたらきっと素晴らしい宝物になるし、そこまでの過程を楽しみたいです。

              もう一つの目標として、このコミュニティで創作をしたいです。既にマスコットキャラクターのパルサーちゃんが誕生しています。そしてその仲間も。みんなこのコミュニティメンバーによって生み出されています。

              Blenderに限らず、みんなが大好きなこと、得意なことを持ち寄って、新しいことやワクワクすることをやっていきたいです！✨

              <a class="t_w" href={ 'https://discord.com/channels/895078439709708318/895078442637336628' }> Discord で話しましょう </a>

            </div>
          </section>
        </main>

        <footer>
          &emsp;
          <script src="/scripts/palaraxBuilding.js"/>
        </footer>
      </body>
    </html>
  );
}

async function handler(req) {
  const { pathname } = new URL( req.url );
  const type = req.url.match( new RegExp( /.*(\..*)/ ) );

  if ( type ) {
    const mimeList = {
      ".png": "application/image",
      ".ico": "application/image",
      ".svg": "image/svg+xml",
      ".css": "text/css",
      ".js": "text/javascript"
    };
    console.log( type );
    const file = await Deno.readFile( "./assets/" + pathname );
    console.log( mimeList[ type[ 1 ] ] );
    return new Response( file, {
      headers: { "content-type": mimeList[ type[ 1 ] ] }
    } );
  }

  const html = renderSSR( <App/> );
  return new Response( "<!DOCTYPE html>" + html, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  } );
}

console.log( "Listening on http://localhost:8000" );
serve( handler );
