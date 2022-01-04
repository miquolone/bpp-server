/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <html class="bg_skew_border">
      <head>
        <title>BPP（用のサンプル）</title>
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
        <script src="https://unpkg.com/three@0.131.3/build/three.min.js"></script>
        <script src="/scripts/threeExample.js"></script>

        <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"/>
        <link rel="icon" href="/images/favicon.png"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
        <link href="/styles/style.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <header>
          <img class="logo_img" src="/images/bpp_150_alpha.png"/>
          <p class={ "corporate_information" }>
            <strong>私たちについて</strong>
            <br/>
            ＊サンプル
            ようこそBeautifulPlanetsProjectへ<br/>
            私たちは、CG制作の初心者から熟練者までが集まるコミュニティです。<br/>
            私たちの目的はBlenderへの貢献。目的のためにCG惑星100個の制作とNFTとしてのを公開を進めています。 <br/>

            NFTの転売時に発生する料率から経費を差し引いた最終利益をETH建てでBlenderへの寄付を続けています。 <br/>
            透明性を持たせるためにハッシュの記録を検索し寄付毎に明細を自動で掲載していきます。 <br/>
          </p>
        </header>

        <div class="stickyBackground">
          ↓これは任意の惑星とかどうかな <br/>
          <canvas id="myCanvas"></canvas>
        </div>

        <main>
          <h1 class="headerMain">--- 活動を紹介 ---</h1>

          <section class="activity" style={ "padding:unset; margin:unset;" }>
            <h2>惑星の魔法使い</h2>
            <p>
              キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載
              キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載
              キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載キャラクタたちの紹介や経緯を記載
            </p>
            <div class="activity_contents">
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662291642395918337"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662292741907546113"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662294940930801665"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662296040442429441"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662293841419173889"/>
            </div>
          </section>


          <section class="activity">
            <h2>惑星</h2>
            <p>
              惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載
              惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載
              惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載惑星たちの紹介や経緯を記載
            </p>
            <div class="activity_contents">
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662286144837779457"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662297139954057217"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662287244349407233"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662288343861035009"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662277348744757249"/>
              <nft-card vertical="" contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662283945814523905"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662289443372662785"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662290542884290561"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662285045326151681"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662300438488940545"/>
              <nft-card vertical contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
              tokenId="68029628652796512442132285988694870032096907384190819011746662298239465684993"/>
            </div>
          </section>

          <section class="activity">
            <h2>音楽</h2>
            <div class="activity_contents">
              /// 音楽
            </div>
          </section>

          <section class="activity">
            <h2>Sandbox</h2>
            <div class="activity_contents">
              /// Sandbox
            </div>
          </section>

          <section>
            <h2>コミュニティメンバ</h2>
            <div class="flex-center">
              <div class="memberIcon"></div>
              <div class="memberIcon"></div>
              <div class="memberIcon"></div>
              <div class="memberIcon"></div>
              <div class="memberIcon"></div>
            </div>
          </section>

          <section class="activity">
            <h2>BBPについて</h2>
            <p class="message">
              ようこそ,Beautiful Planets Projectへ！ <br/>

              私たちは、CG制作の初心者から熟練者までが集まるコミュニティです。<br/>

              Blenderへの貢献を目的としてCG惑星100個を制作とNFTを公開を進めています。 <br/>

              惑星は想像上、架空の惑星でOK！🪐惑星と思えれば良いので、ほとんどルールはありません。（一度うめちゃんがチェックは入れます）

              惑星はみんなが集まってくれて活動してくれた証になります。みんなで100個の惑星がつくれたらきっと素晴らしい宝物になるし、そこまでの過程を楽しみたいです。

              もう一つの目標として、このコミュニティで創作をしたいです。既にマスコットキャラクターのパルサーちゃんが誕生しています。そしてその仲間も。みんなこのコミュニティメンバーによって生み出されています。

              Blenderに限らず、みんなが大好きなこと、得意なことを持ち寄って、新しいことやワクワクすることをやっていきたいです！✨
            </p>
          </section>

        </main>
        <footer>
          <a href="https://discord.gg/">Discord招待リンクを検討</a>
        </footer>
      </body>
    </html>
    );
    }


    async function handler(req) {
      const { pathname } = new URL( req.url );
      console.log( pathname );

      if ( pathname.startsWith( "/images/" ) ) {
        const file = await Deno.readFile( "./assets/" + pathname );
        return new Response( file, {
          headers: { "content-type": "application/image" }
        } );
      }

      if ( pathname.startsWith( "/scripts/" ) ) {
        const file = await Deno.readFile( "./assets/" + pathname );
        return new Response( file, {
          headers: { "content-type": "application/image" }
        } );
      }

      if ( pathname.startsWith( "/styles/" ) ) {
        const file = await Deno.readFile( "./assets/" + pathname );
        console.log( "file:::", file );
        return new Response( file, {
          headers: {
            "content-type": "text/css"
          }
        } );
      }

      const html = renderSSR( <App/> );
      return new Response( '<!DOCTYPE html>' + html, {
        headers: {
          "content-type": "text/html; charset=utf-8"
        }
      } );
    }

      console.log( "Listening on http://localhost:8000" );
      serve( handler );



