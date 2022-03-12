
import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import {Application, send, Router} from "https://deno.land/x/oak/mod.ts";
import {React, ReactDOMServer} from "./dep.ts";

import Main from "./Main.tsx";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.redirect("https://bpp-ten.vercel.app/")
});

router.get("/next", (context) => {
  context.response.body = ReactDOMServer.renderToString(
    <Main/>
  );
}).get("/image", () => {
}).get("/shop/:id", (context) => {
  if (context?.params?.id) {
    context.response.body = context.params.id;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  console.log(context.request.url)
  const {pathname} = new URL(context.request.url.pathname);
  await send(context, "./assets/" + pathname, {
    root: `${Deno.cwd()}/`,
  });
})


function HTTPRequestHandler() {
  return new Response( '', {
    status: 301,
    statusText: "301 Moved Permanently",
    headers: {
      "Location": "https://bpp-ten.vercel.app/"
    }
  } );
}

await app.listen({port: 8000});
console.log("Listening on http://localhost:8000");
