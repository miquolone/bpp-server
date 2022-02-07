/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.125.0/http/server.ts";

function HTTPRequestHandler(req) {
  return new Response( '<!DOCTYPE html><div><a href="https://bpp-ten.vercel.app/">BPPのページは移動しました</a></div>', {
    status: 301,
    statusText: "301 Moved Permanently",
    headers: {
      "Location": "https://bpp-ten.vercel.app/"
    }
  } );
}

console.log( "Listening on http://localhost:8000" );
await serve( HTTPRequestHandler );
