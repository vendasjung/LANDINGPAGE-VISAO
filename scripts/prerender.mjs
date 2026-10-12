import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.prerender/prerender-entry.js";
const path = new URL("../dist/index.html", import.meta.url);
const template = await readFile(path, "utf8");
const markup = render();
if (!template.includes('<div id="root"></div>') || !markup.includes("Óculos de grau e sol")) throw new Error("Invalid prerender output");
await writeFile(path, template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
await rm(new URL("../.prerender", import.meta.url), { recursive: true, force: true });
console.log("Prerendered home: visible content included in HTML.");
