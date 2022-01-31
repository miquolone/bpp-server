import {serve} from "https://deno.land/std@0.122.0/http/server.ts";
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import OpenSeaPlanets from "./OpenSeaPlanets.tsx";
import OpenSeaCharacter from "./OpenSeaCharacter.tsx";

const BPP: React.FC<{ title: string }> = ({title, children}) => (
  <html className="bg_skew_border">
    <head>
      <title>{title}</title>
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
      {children}
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
        <a href={"/"}> <img className="logo_img" src="/images/bpp_150_alpha.png"/> </a>
        <div className={"link"}> | HOME | STORE | SOCIALS |</div>
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
              <img src={"https://cdn.discordapp.com/avatars/578158816680607754/73b2316eabaf54649d6c1fc32fe22a1e.webp?size=240"}/>
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

            <a className="t_w" href={'https://discord.com/channels/895078439709708318/895078442637336628'}> Discord で話しましょう </a>

          </div>
        </section>
      </main>

      <footer>
        &emsp;
        <script src="/scripts/palaraxBuilding.js"/>
      </footer>
    </>
  );
};

async function HTTPRequestHandler(req) {
  const {pathname} = new URL(req.url);
  const patternResolve = pathname.match(new RegExp(/.*(\..*)/));
  if (patternResolve) {
    const [, extension] = patternResolve;
    const mimeList = {
      ".png": "application/image",
      ".ico": "application/image",
      ".svg": "image/svg+xml",
      ".css": "text/css",
      ".js": "text/javascript"
    };
    try {
      const file = await Deno.readFile("./assets/" + pathname);
      return new Response(file, {
        headers: {"content-type": mimeList[extension]}
      });
    } catch (e) {
      console.log('おやや？');
    }
  }

  const html = ReactDOMServer.renderToString(<BPP title="bpp"><Main/></BPP>);
  return new Response(html, {
    headers: {"content-type": "text/html; charset=utf-8"}
  });
}

console.log("Listening on http://localhost:8000");
serve(HTTPRequestHandler);
