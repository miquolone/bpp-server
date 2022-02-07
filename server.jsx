/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.121.0/http/server.ts";
import { listenAndServe } from "https://deno.land/std@0.121.0/http/mod.ts";
import {Application, send, Router} from "https://deno.land/x/oak/mod.ts";


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

    const html = ReactDOMServer.renderToString(<Main/>);
    return new Response(html, {
        headers: {"content-type": "text/html; charset=utf-8"}
    });
}

console.log("Listening on http://localhost:8000");
serve(HTTPRequestHandler);
