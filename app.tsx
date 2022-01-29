import {Application, send, Router} from "https://deno.land/x/oak/mod.ts";
import {React, ReactDOMServer} from "./dep.ts";

import Main from "./Main.tsx";

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

            {children}

            <footer>
                &emsp;
                <script src="/scripts/palaraxBuilding.js"/>
            </footer>
        </body>
    </html>
);

const app = new Application();
const router = new Router();
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

router.get("/", (context) => {
    context.response.body = ReactDOMServer.renderToString(
        <BPP title="bpp">
            aaa
        </BPP>
    );
}).get("/image", (ctx) => {
    ctx.response.body = "Hello World!";

// }).get("/shop/:id", (context) => {
//     if (context?.params?.id) {
//         context.response.body = context.params.id;
});

app.use(router.routes());
// app.use(router.allowedMethods());
// app.use(async (context) => {
//     const {pathname} = new URL(context.request.url);
//     await send(context, "./assets/" + pathname, {
//         root: `${Deno.cwd()}/`,
//     });
// })

await app.listen({port: 8000});
console.log("Listening on http://localhost:8000");
