const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const root = "E:\\BosonSmart\\boson-smart-phase1-site";
const baseUrl = "http://localhost:5173/ismart";

const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\..+/, "")
  .replace("T", "-");

const outDir = path.join(root, "screenshots", `${timestamp}-zh-v2`);
fs.mkdirSync(outDir, { recursive: true });

const pages = [
  { name: "home", hash: "" },
  { name: "scenarios", hash: "#scenarios" },
  { name: "solutions", hash: "#solutions" },
  { name: "services", hash: "#services" },
  { name: "estimate", hash: "#estimate" },
  { name: "contact", hash: "#contact" },
];

const viewports = [
  {
    name: "desktop",
    width: 1440,
    height: 1400,
    isMobile: false,
  },
  {
    name: "mobile",
    width: 390,
    height: 1200,
    isMobile: true,
  },
];

async function waitForPageReady(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(900);

  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  await page.waitForTimeout(700);
}

async function clickChinese(page) {
  const candidates = [
    "text=繁中",
    "button:has-text('繁中')",
    "a:has-text('繁中')",
    "text=中文",
    "button:has-text('中文')",
    "a:has-text('中文')",
    "text=中",
    "button:has-text('中')",
    "text=ZH",
    "button:has-text('ZH')",
    "[aria-label*='中文']",
    "[aria-label*='Chinese']",
    "[data-lang='zh']",
    "[data-language='zh']",
  ];

  for (const selector of candidates) {
    try {
      const locator = page.locator(selector).first();
      const count = await page.locator(selector).count();

      if (count > 0 && await locator.isVisible()) {
        await locator.click({ timeout: 1500 });
        await page.waitForTimeout(900);
        console.log(`Clicked Chinese selector: ${selector}`);
        return true;
      }
    } catch (err) {}
  }

  return false;
}

async function isChinese(page) {
  const bodyText = await page.locator("body").innerText().catch(() => "");
  return (
    bodyText.includes("智能") ||
    bodyText.includes("屋企") ||
    bodyText.includes("服務") ||
    bodyText.includes("順手") ||
    bodyText.includes("方案") ||
    bodyText.includes("聯絡") ||
    bodyText.includes("估算")
  );
}

async function ensureChinese(page) {
  if (await isChinese(page)) {
    return true;
  }

  const clicked = await clickChinese(page);

  if (!clicked) {
    console.log("Warning: Could not find Chinese language selector.");
    return false;
  }

  if (await isChinese(page)) {
    console.log("Chinese UI confirmed.");
    return true;
  }

  console.log("Warning: clicked Chinese selector, but Chinese text was not clearly detected.");
  return false;
}

async function goHashWithoutReload(page, hash) {
  await page.evaluate((nextHash) => {
    if (!nextHash) {
      history.pushState("", document.title, window.location.pathname);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = nextHash;
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }

    window.scrollTo(0, 0);
  }, hash);

  await page.waitForTimeout(1000);

  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  await page.waitForTimeout(700);
}

(async () => {
  const browser = await chromium.launch();

  for (const viewport of viewports) {
    const viewportDir = path.join(outDir, viewport.name);
    fs.mkdirSync(viewportDir, { recursive: true });

    const context = await browser.newContext({
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
      deviceScaleFactor: viewport.isMobile ? 2 : 1,
      isMobile: viewport.isMobile,
      hasTouch: viewport.isMobile,
    });

    const page = await context.newPage();

    console.log("");
    console.log(`Opening ${viewport.name} viewport...`);

    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
    await waitForPageReady(page);

    await ensureChinese(page);

    for (const item of pages) {
      const file = path.join(viewportDir, `${item.name}-${viewport.name}-zh.png`);

      console.log(`Capturing ${item.name} / ${viewport.name} / zh...`);

      await goHashWithoutReload(page, item.hash);

      // Important: after route change, do NOT reload.
      // Just verify language is still Chinese.
      await ensureChinese(page);

      await page.screenshot({
        path: file,
        fullPage: true,
      });
    }

    await context.close();
  }

  await browser.close();

  console.log("");
  console.log("Chinese screenshots saved to:");
  console.log(outDir);
})();
