
import * as esbuild from 'https://deno.land/x/esbuild@v0.14.11/mod.js'
const code = await Deno.readTextFileSync( "./assets/scripts/youtube.js" );
const result = await esbuild.transform(code, { loader: 'js' })
console.log('result:', result)
Deno.writeTextFile('aaa.esbuild.js', result.code);
esbuild.stop()


// sudo deno run --allow-run --allow-write --no-check --allow-env --unstable --allow-read=.  esbuild.js
