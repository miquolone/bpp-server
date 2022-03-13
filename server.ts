/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import {serve} from "https://deno.land/std@0.125.0/http/server.ts";

function HTTPRequestHandler(req: Request): Response {

  const {pathname} = new URL(req.url);
  const patternResolve = pathname.match(new RegExp(/.*(\..*)/));
  if (patternResolve) {
    const [, extension] = patternResolve;
    const mimeList: { [key: string]: string } = {
      ".png": "application/image",
      ".ico": "application/image",
      ".svg": "image/svg+xml",
      ".css": "text/css",
      ".js": "text/javascript"
    };

    try {
      const file = Deno.readFileSync("./bpp-front/public/" + pathname);
      return new Response(file, {
        headers: {"content-type": mimeList[extension]}
      });
    } catch (e) {
      console.log('おやや？');
    }
  }

  return new Response('<!DOCTYPE html><div><a href="https://bpp-ten.vercel.app/">BPPのページは移動しました</a></div>', {
    status: 301,
    statusText: "301 Moved Permanently",
    headers: {
      "Location": "https://bpp-ten.vercel.app/"
    }
  });
}

console.log("Listening on http://localhost:8000");
await serve(HTTPRequestHandler);
