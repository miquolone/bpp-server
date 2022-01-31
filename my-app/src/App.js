import logo from './assets/images/logo_image.png';
import './App.css';


function App() {
  return (
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

        <script src="/libs/simpleParallax.min.js"/>
        <script src="/scripts/threeExample.js"/>
        <script src="/scripts/youtube.js"/>

        <link rel="icon" href="/images/favicon.png"/>
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
        <link href="/styles/style.css" rel="stylesheet"/>


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      </head>
      <body>
        { children }
      </body>
    </html>
  );
}

export default App;
