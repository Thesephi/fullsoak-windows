# FullSoak Windows

An example [FullSoak](https://jsr.io/@fullsoak/fullsoak) App that:

- can be developed on Windows platform (_with_ or _without_ Linux subsystem)
- can be developed on Unix platform (e.g. MacOS)
- is deployable to [Deno Deploy](https://deno.com/deploy):
  https://fullsoak-windows.deno.dev

# What's cooking here?

Contrary to official examples for
[Node.js](github.com/fullsoak/nodejs-examples/),
[Deno](https://github.com/fullsoak/deno-examples/),
[Bun](https://github.com/fullsoak/bun-examples/),
[Cloudflare Workers](https://github.com/fullsoak/cloudflare-workers-examples/),
this one is intentionally meant to be an <ins>unventional take</ins> (ie: the
path less travelled) when building a FullSoak app.

What's the difference?

In "a traditional FullSoak app", the recommended directory structure is:

```
fullsoak-example
|_ src
|  |_ components
|  |  |_ Shared
|  |  |  |_ styles.css
|  |  |_ MyComponent
|  |     |_ index.tsx
|  |     |_ styles.css
|  |_ main.ts
|_ deno.jsonc
```

In this repo, everything feels like a rebellious teenager:

```
foo
|_ ctrl
|  |_ MyController.ts
|_ things
|  |_ Box
|  |  |_ index.tsx
|  |_ MyApp.tsx
|  |_ MyApp.css
|_ deno.jsonc
|_ main.ts
```

Yet the actual logic in `main.ts` for both setups remains relatively similar.
This proves that the framework itself can handle unconventional usages. However,
any unconvenitional (undocumented / unofficial) usage is supported on a
best-effort basis, so if you're unsure what you're doing, it's advisable to
simply stick to the documented setup.

# Other resources

- Project wiki: https://github.com/fullsoak/fullsoak/wiki
- HackerNews discussions: https://news.ycombinator.com/item?id=43029089
