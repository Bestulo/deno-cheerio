# Important deprecation clarification

At the moment, `cheerio` can be imported into Deno directly by using [esm.sh](https://esm.sh/).

[Note from @artze](https://github.com/Bestulo/deno-cheerio/pull/9):
> Do take note that, `cheerio` from `v1.0.0` onwards can be imported in a deno app directly with `import * as cheerio from "https://esm.sh/cheerio"` without this `deno-cheerio` wrapper.

### **This fact makes this current module irrelevant and deprecated.**

If ESM were to change things, and importing directly from it were to no longer become possible (unlikely but who knows), I will accept pull requests in this module to make `cheerio` work on Deno again.

Until then, consider this module deprecated and legacy. You're free to use it but there's no point to that.

---

Original readme:

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
