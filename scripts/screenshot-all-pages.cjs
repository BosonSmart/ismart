const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://127.0.0.1:5173";
const OUT_DIR = path.join(process.cwd(), "screenshots-all-pages");

fs.mkdirSync(OUT_DIR, { recursive: true });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function safeName(url) {
  const u = new URL(url);
  let name = (u.pathname + u.hash)
    .replace(/^\/$/, "home")
    .replace(/[\/#?=&:]+/g, "-")
    .replace(/^-|-$/g, "");

  return name || "home";
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE_URL);
      if (res.ok) return;
    } catch {}
    await sleep(1000);
  }
  throw new Error("Vite server did not start.");
}

(async () => {
  const server = spawn("npm", ["run", "dev", "--", "--host", "127.0.0.1"], {
    shell: true,
    stdio: "inherit"
  });

  try {
    await waitForServer();

    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1200 },
      deviceScaleFactor: 1
    });

    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const links = await page.$$eval("a[href]", anchors =>
      anchors
        .map(a => a.href)
        .filter(href =>
          href.startsWith(location.origin) &&
          !href.includes("mailto:") &&
          !href.includes("tel:")
        )
    );

    const urls = [...new Set([BASE_URL + "/", ...links])];

    for (const url of urls) {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForTimeout(800);

      const filename = safeName(url) + ".png";
      const filepath = path.join(OUT_DIR, filename);

      await page.screenshot({
        path: filepath,
        fullPage: true
      });

      console.log("Saved:", filepath);
    }

    await browser.close();
  } finally {
    server.kill();
  }
})();
