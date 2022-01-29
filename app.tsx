import {Application, Router} from "https://deno.land/x/oak/mod.ts";
import ReactDOMServer from "https://jspm.dev/react-dom/server";
import React from "https://jspm.dev/react";

const BPP = ({}) => (
    <html className="bg_skew_border">
        a
    </html>
);

const app = new Application();
const router = new Router();

router.get("/", (context) => {
    context.response.body = ReactDOMServer.renderToString(
        <BPP title="bpp">
            aaa
        </BPP>
    );
})

app.use(router.routes());

await app.listen({port: 8000});
console.log("Listening on http://localhost:8000");
