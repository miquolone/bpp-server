
import babelstandalone from "https://dev.jspm.io/@babel/standalone"

const code = await Deno.readTextFileSync( "./assets/scripts/youtube.js" );
const transformed = babelstandalone.transform(code, {
  presets: ['env']
}).code
Deno.writeTextFile('aaa.babel.js', transformed);
console.log(transformed)



// sudo deno run --allow-run --allow-write --no-check --allow-env --unstable --allow-read=.  babel.js
