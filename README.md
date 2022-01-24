# Purpose

This repo is intended to reproduce an issue where an attempt to use the fetch API within Cloudflare workers works using wrangler v2 (miniflare) but fails in Cloudflare Pages itself. The issue appears to be tied to using `cache` within the call to the fetch API. The repo is deploying to https://cloudflarepageswithworkersandfetchapi.pages.dev/

# Local development (Wrangler v2):

```
npx wrangler@beta pages dev .
```
