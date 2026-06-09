const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const root = "E:\\BosonSmart\\boson-smart-phase1-site";
const appPath = path.join(root, "src", "App.jsx");
const cssPath = path.join(root, "src", "App.css");

if (!fs.existsSync(appPath)) throw new Error("Cannot find src/App.jsx");
if (!fs.existsSync(cssPath)) throw new Error("Cannot find src/App.css");

const stamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\..+/, "")
  .replace("T", "-");

const backupDir = path.join(
  "E:\\BosonSmart\\_local-backups\\boson-smart-phase1-site",
  `home-hero-node-${stamp}`
);

fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(appPath, path.join(backupDir, "App.jsx.bak"));
fs.copyFileSync(cssPath, path.join(backupDir, "App.css.bak"));

console.log("Backup created at:");
console.log(backupDir);

let app = fs.readFileSync(appPath, "utf8");
let beforeApp = app;

const newEnglishCopy = `heroEyebrow: "SMART LIVING • DESIGNED TO FEEL CALM",
        heroTitle: "A practical smart home. Planned in 14 days. From HK$980.",
        heroBody: "We design and set up your smart living system in clear steps, with suitable devices, useful automation, and no confusing gadget shopping.",
        primary: "start my plan",
        secondary: "see pricing",`;

// Patch the exact English homepage copy block before philosophyTitle.
app = app.replace(
  /heroEyebrow:\s*"[^"]*",\s*\r?\n\s*heroTitle:\s*"[^"]*",\s*\r?\n\s*heroBody:\s*"We design and set up your smart living system in clear steps, with suitable devices, useful automation, and no confusing gadget shopping\.",\s*\r?\n\s*primary:\s*"[^"]*",\s*\r?\n\s*secondary:\s*"[^"]*",(?=\s*\r?\n\s*philosophyTitle:)/,
  () => newEnglishCopy
);

// Fallback for current known state.
app = app.replace(
  `heroEyebrow: "Smart living design studio",
        heroTitle: "A practical smart home. Planned in 14 days. From HK$850.",
        heroBody: "We design and set up your smart living system in clear steps, with suitable devices, useful automation, and no confusing gadget shopping.",
        primary: "Explore",
        secondary: "Explore",`,
  newEnglishCopy
);

// Replace the simple hero h1 render with split lines for the pink price.
if (!app.includes("home-ambient-hero-title__price")) {
  app = app.replace(
    `          <h1>{copy.heroTitle}</h1>`,
    `          <h1 className="home-ambient-hero-title">
            {isZh ? (
              copy.heroTitle
            ) : (
              <>
                <span>A practical smart home.</span>
                <span>Planned in 14 days.</span>
                <span className="home-ambient-hero-title__price">From HK$980.</span>
              </>
            )}
          </h1>`
  );
}

if (app === beforeApp) {
  console.log("WARNING: App.jsx did not change. The target text may already be patched or has a different structure.");
} else {
  fs.writeFileSync(appPath, app, "utf8");
  console.log("Patched App.jsx.");
}

let css = fs.readFileSync(cssPath, "utf8");

const cssStart = "/* BOSONSMART_HOME_REFERENCE_HERO_OVERRIDE_START */";
const cssEnd = "/* BOSONSMART_HOME_REFERENCE_HERO_OVERRIDE_END */";

const newCss = `
${cssStart}

.home-ambient-page .home-ambient-hero {
  position: relative !important;
  min-height: 76vh !important;
  padding: 128px 0 72px !important;
  display: block !important;
  overflow: hidden !important;
  background-color: #f5f2ee !important;
  background-image:
    linear-gradient(rgba(35, 35, 35, 0.075) 1px, transparent 1px),
    linear-gradient(90deg, rgba(35, 35, 35, 0.075) 1px, transparent 1px) !important;
  background-size: 34px 34px !important;
}

.home-ambient-page .home-ambient-hero__visual {
  display: none !important;
}

.home-ambient-page .home-ambient-hero__copy {
  position: relative !important;
  z-index: 2 !important;
  width: min(1180px, calc(100% - 40px)) !important;
  margin: 0 auto !important;
  padding: 0 !important;
  text-align: left !important;
  max-width: none !important;
}

.home-ambient-page .home-ambient-eyebrow {
  display: inline-flex !important;
  align-items: center !important;
  gap: 10px !important;
  margin: 0 0 18px !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: #ef6f78 !important;
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.18em !important;
  text-transform: uppercase !important;
}

.home-ambient-page .home-ambient-eyebrow::before {
  content: "" !important;
  width: 7px !important;
  height: 7px !important;
  display: inline-block !important;
  background: #ef6f78 !important;
}

.home-ambient-page .home-ambient-hero-title,
.home-ambient-page .home-ambient-hero__copy h1 {
  max-width: 940px !important;
  margin: 0 !important;
  color: #242424 !important;
  text-align: left !important;
  font-size: clamp(3rem, 7.2vw, 5.8rem) !important;
  line-height: 0.94 !important;
  letter-spacing: -0.08em !important;
  font-weight: 850 !important;
}

.home-ambient-page .home-ambient-hero-title span {
  display: block !important;
}

.home-ambient-page .home-ambient-hero-title__price {
  color: #ef6f78 !important;
}

.home-ambient-page .home-ambient-hero__copy > p:not(.home-ambient-eyebrow) {
  max-width: 720px !important;
  margin: 30px 0 0 !important;
  color: #555 !important;
  text-align: left !important;
  font-size: 1.02rem !important;
  line-height: 1.75 !important;
}

.home-ambient-page .home-ambient-actions {
  justify-content: flex-start !important;
  display: flex !important;
  gap: 14px !important;
  margin-top: 28px !important;
}

.home-ambient-page .home-ambient-actions .btn-primary,
.home-ambient-page .home-ambient-actions .btn-secondary {
  min-height: 46px !important;
  border-radius: 999px !important;
  padding: 0 18px !important;
  font-size: 0.86rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.02em !important;
  text-transform: lowercase !important;
}

.home-ambient-page .home-ambient-actions .btn-primary {
  background: #ef6f78 !important;
  color: #fff !important;
  border-color: #ef6f78 !important;
  box-shadow: 0 14px 32px rgba(239, 111, 120, 0.26) !important;
}

.home-ambient-page .home-ambient-actions .btn-secondary {
  background: rgba(255, 255, 255, 0.92) !important;
  color: #444 !important;
  border: 1px solid rgba(0, 0, 0, 0.16) !important;
}

.home-ambient-page .home-ambient-hero-questions {
  display: none !important;
}

@media (max-width: 760px) {
  .home-ambient-page .home-ambient-hero {
    min-height: auto !important;
    padding: 112px 0 54px !important;
  }

  .home-ambient-page .home-ambient-hero__copy {
    width: min(100% - 28px, 1180px) !important;
  }

  .home-ambient-page .home-ambient-hero-title,
  .home-ambient-page .home-ambient-hero__copy h1 {
    font-size: clamp(2.45rem, 12vw, 4rem) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.065em !important;
  }

  .home-ambient-page .home-ambient-hero__copy > p:not(.home-ambient-eyebrow) {
    margin-top: 22px !important;
    font-size: 0.94rem !important;
    line-height: 1.65 !important;
  }

  .home-ambient-page .home-ambient-actions {
    gap: 10px !important;
  }
}

${cssEnd}
`;

const cssPattern = new RegExp(
  cssStart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\\s\\S]*?" + cssEnd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

if (cssPattern.test(css)) {
  css = css.replace(cssPattern, newCss);
  console.log("Updated existing CSS override.");
} else {
  css = css.trimEnd() + "\n\n" + newCss + "\n";
  console.log("Added CSS override.");
}

fs.writeFileSync(cssPath, css, "utf8");

console.log("Running npm build...");
cp.execSync("npm run build", {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

console.log("");
console.log("Done. Git status:");
cp.execSync("git status --short", {
  cwd: root,
  stdio: "inherit",
  shell: true,
});
