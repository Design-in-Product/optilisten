// static-routes.js — give the routes that matter a real file, so they return 200.
//
// THE PROBLEM, stated exactly, because "the privacy page is missing" is the wrong description
// and cost a round of confusion on 2026-09-24:
// The privacy policy is NOT missing. It renders correctly in any browser, it is substantive, and
// it is the same one 1.x shipped with. What is wrong is the HTTP status: GitHub Pages serves a
// real file only for `/`, so every deeper route 404s, and `public/404.html` (spa-github-pages)
// rewrites the URL client-side and hands it to the router. A human sees the policy; anything
// reading the status code sees a dead link — and Apple requires a working privacy policy URL on
// every App Store listing.
//
// THE FIX: copy the built index.html to <route>/index.html for each route we publish a URL for.
// The router still renders the same page from the same bundle; only the status code changes,
// from 404 to 200. The 404 shim stays for every other path, including future routes and typos.
//
// Deliberately narrow: only routes that appear in a listing, a store record or a link we hand
// out. This is not a prerender and does not try to be — the page's HTML is still the SPA shell.

const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const ROUTES = ['privacy', 'terms'];

const shell = path.join(BUILD, 'index.html');
if (!fs.existsSync(shell)) {
  console.error('static-routes: build/index.html is missing — did the build actually run?');
  process.exit(1);
}

const html = fs.readFileSync(shell);
let made = 0;
const skipped = [];

for (const route of ROUTES) {
  // A route with no component would ship a URL that returns 200 and renders NotFound, which is
  // worse than the 404 it replaces: it looks healthy and says nothing.
  const component = path.join(__dirname, '..', 'src', 'pages',
    route.charAt(0).toUpperCase() + route.slice(1) + '.tsx');
  if (!fs.existsSync(component)) { skipped.push(route); continue; }

  const dir = path.join(BUILD, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  made += 1;
  console.log(`static-routes: ${route}/index.html written`);
}

if (skipped.length) {
  console.log(`static-routes: skipped (no page component): ${skipped.join(', ')}`);
}
if (made === 0) {
  console.error('static-routes: wrote nothing — every route was skipped. That is a setup fault.');
  process.exit(1);
}
console.log(`static-routes: ${made} route(s) now return 200 instead of 404`);
