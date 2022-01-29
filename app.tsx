import {Application, send, Router} from "https://deno.land/x/oak/mod.ts";
import {React } from "./dep.ts";
import ReactDOMServer from "https://jspm.dev/react-dom/server";

import Main from "./Main.tsx";

const BPP: React.FC<{ title: string }> = ({title, children}) => (
    <html className="bg_skew_border">
        a
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
