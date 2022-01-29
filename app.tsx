import {Application, Router} from "https://deno.land/x/oak/mod.ts";
import ReactDOMServer from "https://jspm.dev/react-dom/server";
import React from "https://jspm.dev/react";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
    context.response.body = ReactDOMServer.renderToString(
        <html className="bg_skew_border">
            a
        </html>
    );
})

app.use(router.routes());

await app.listen({port: 8000});
console.log("Listening on http://localhost:8000");
