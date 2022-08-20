# deno-cheerio

Cheerio port to Deno with typings

## How to use

```js
import { cheerio } from "https://deno.land/x/cheerio@1.0.6/mod.ts";

const $ = cheerio.load(html);
$("content").text();
```

## Documentation and relevant links

- https://cheerio.js.org/
- https://www.npmjs.com/package/cheerio

## How I ported this

- I just copied DefinitelyTyped/cheerio
- erased some node and npm specifics that caused errors.
- removed global namespace cuz why not
- exported all interfaces (typings previously relied on tsc ambient import from .d.ts)
- added `& Cheerio` to the normal returned value of `cheerio.load(html)`
  - Root is callable, Cheerio can be used for methods, so as they are mixed, they allow for $ to be used normally.

## Pull-requests are welcome.

If you feel you can fix, upgrade or improve this, just do it.

## Depends on esm.sh

Be aware that this module imports from https://esm.sh/cheerio

If `esm` moves that link, this port is done for. :)
