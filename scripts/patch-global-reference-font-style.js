const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const root = "E:\\BosonSmart\\boson-smart-phase1-site";
const cssPath = path.join(root, "src", "App.css");

if (!fs.existsSync(cssPath)) {
  throw new Error("Cannot find src/App.css");
}

const stamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\..+/, "")
  .replace("T", "-");

const backupDir = path.join(
  "E:\\BosonSmart\\_local-backups\\boson-smart-phase1-site",
  `global-font-style-${stamp}`
);

fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(cssPath, path.join(backupDir, "App.css.bak"));

let css = fs.readFileSync(cssPath, "utf8");

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;600;700;800;900&display=swap');`;

if (!css.includes("fonts.googleapis.com/css2?family=IBM+Plex+Mono")) {
  css = fontImport + "\n" + css;
}

const start = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_START */";
const end = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_END */";

const globalFontCss = `
${start}

/* Whole-site reference typography experiment.
   Headings use a tight grotesk.
   Interface/body text uses a small mono-style font.
   Traditional Chinese falls back to Noto Sans TC for readability. */

:root {
  --bs-font-heading: "Inter Tight", "Noto Sans TC", "Arial Narrow", "Helvetica Neue", Arial, sans-serif;
  --bs-font-body: "IBM Plex Mono", "Noto Sans TC", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}

/* General site text */
html,
body,
#root,
button,
input,
textarea,
select {
  font-family: var(--bs-font-body) !important;
}

/* Main headings */
h1,
h2,
h3,
h4,
h5,
h6,
[class*="title"],
[class*="Title"] {
  font-family: var(--bs-font-heading) !important;
  letter-spacing: -0.045em;
}

/* Big page heroes */
h1,
.home-ambient-page h1,
.solutions-system-page h1,
.services-page h1,
.estimate-configurator-page h1 {
  font-weight: 850 !important;
  letter-spacing: -0.075em !important;
}

/* Subheadings and card headings */
h2,
h3,
[class*="card"] h3,
[class*="Card"] h3 {
  font-weight: 780 !important;
}

/* Eyebrows, nav, buttons, small UI labels */
nav,
header,
[class*="nav"],
[class*="eyebrow"],
[class*="Eyebrow"],
[class*="kicker"],
[class*="Kicker"],
button,
.btn-primary,
.btn-secondary,
a[class*="btn"],
[class*="tag"],
[class*="Tag"],
small {
  font-family: var(--bs-font-body) !important;
  letter-spacing: -0.01em;
}

/* Keep uppercase labels tighter and more editorial */
[class*="eyebrow"],
[class*="Eyebrow"],
[class*="kicker"],
[class*="Kicker"],
[class*="tag"],
[class*="Tag"] {
  letter-spacing: 0.08em !important;
  text-transform: uppercase;
}

/* Paragraphs: mono can feel wide, so slightly reduce size and increase line-height */
p,
li {
  font-family: var(--bs-font-body) !important;
  line-height: 1.7;
}

/* Buttons closer to reference */
button,
.btn-primary,
.btn-secondary,
a[class*="btn"] {
  font-size: 0.78rem;
  font-weight: 600;
}

/* Better Chinese readability: loosen spacing slightly for CJK content */
:lang(zh),
[lang="zh"],
html:has(body) {
  font-synthesis-weight: auto;
}

/* Keep scenario full-screen labels readable */
.scenario-page,
.scenario-page button,
.scenario-page p,
.scenario-page span {
  font-family: var(--bs-font-body) !important;
}

/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_END */
`;

const pattern = new RegExp(
  start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
    "[\\s\\S]*?" +
    end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

 if (pattern.test(css)) {
  css = css.replace(pattern, globalFontCss);
  console.log("Updated existing global font style block.");
} else {
  css = css.trimEnd() + "\n\n" + globalFontCss + "\n";
  console.log("Added global font style block.");
}

fs.writeFileSync(cssPath, css, "utf8");

console.log("Backup created at:");
console.log(backupDir);

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
