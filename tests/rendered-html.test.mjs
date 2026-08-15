import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("GitHub Pages build contains the ordering application", async () => {
  const html = await readFile(new URL("../dist-pages/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Order Online \| Tito's Diner<\/title>/);
  assert.match(html, /titos-diner-ordering\/assets\/index-/);
  assert.match(html, /og:image/);
  await access(new URL("../dist-pages/icon/homeactive.png", import.meta.url));
  await access(new URL("../dist-pages/titosmenu/menu_bacon_burger.jpg", import.meta.url));
});

test("menu source includes the official substitution prices", async () => {
  const source = await readFile(new URL("../app/menu-data.ts", import.meta.url), "utf8");
  const itemCount = (source.match(/ id:"/g) || []).length;
  assert.ok(itemCount >= 100, `expected at least 100 menu entries, found ${itemCount}`);
  assert.match(source, /Sweet potato fries",price:\.99/);
  assert.match(source, /Onion rings",price:1\.49/);
  assert.match(source, /Egg whites",price:\.99/);
  assert.match(source, /Grilled chicken breast",price:3\.99/);
  assert.match(source, /Malted",price:\.79/);
  await access(new URL("../public/og.png", import.meta.url));
});

test("production worker renders Tito's ordering page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(new Request("http://localhost/", { headers:{ accept:"text/html" } }), { ASSETS:{ fetch:async () => new Response("Not found", { status:404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Order Online \| Tito's Diner/);
  assert.match(html, /COME/);
  assert.match(html, /HUNGRY/);
  assert.doesNotMatch(html, /codex-preview/);
});
