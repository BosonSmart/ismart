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
  `global-font-hard-${stamp}`
);

fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(cssPath, path.join(backupDir, "App.css.bak"));

let css = fs.readFileSync(cssPath, "utf8");

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;600;700;800;900&display=swap');`;

if (!css.includes("IBM+Plex+Mono")) {
  css = fontImport + "\n" + css;
}

// Remove earlier font experiments so they do not fight each other.
const removeBlocks = [
  ["/* BOSONSMART_HOME_HERO_FONT_MATCH_START */", "/* BOSONSMART_HOME_HERO_FONT_MATCH_END */"],
  ["/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_START */", "/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_END */"],
  ["/* BOSONSMART_REFERENCE_HERO_TUNE_START */", "/* BOSONSMART_REFERENCE_HERO_TUNE_END */"],
  ["/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_START */", "/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_END */"]
];

for (const [start, end] of removeBlocks) {
  const pattern = new RegExp(
    start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
      "[\\s\\S]*?" +
      end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "g"
  );
  css = css.replace(pattern, "");
}

const start = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_START */";
const end = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_END */";

const newCss = `
${start}

/* Global reference-style typography pass.
   Aim: editorial smart-design studio style, but avoid over-tight word spacing. */

:root {
  --bs-heading-font: "Inter Tight", "Noto Sans TC", "Arial Narrow", "Helvetica Neue", Arial, sans-serif;
  --bs-ui-font: "IBM Plex Mono", "Noto Sans TC", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}

/* Base text */
html,
body,
#root {
  font-family: var(--bs-ui-font) !important;
  font-feature-settings: "liga" 1, "kern" 1;
}

/* Most readable text should use the mono/editorial UI font */
body,
p,
li,
span,
a,
button,
input,
textarea,
select,
label,
small,
strong,
em,
div,
section,
article,
header,
nav,
footer {
  font-family: var(--bs-ui-font) !important;
}

/* Headings: tight grotesk, but not too tight */
h1,
h2,
h3,
h4,
h5,
h6,
[class*="title"],
[class*="Title"],
[class*="heading"],
[class*="Heading"] {
  font-family: var(--bs-heading-font) !important;
  font-feature-settings: "liga" 1, "kern" 1;
}

/* Page hero headings */
h1,
.home-ambient-page .home-ambient-hero__copy h1,
.home-ambient-page .home-ambient-hero-title,
.solutions-system-page .solutions-system-hero__copy h1,
.services-page .services-hero h1,
.estimate-configurator-page .estimate-configurator-hero h1,
.contact-page h1,
[class*="hero"] h1,
[class*="Hero"] h1 {
  font-family: var(--bs-heading-font) !important;
  font-weight: 850 !important;
  letter-spacing: -0.052em !important;
  line-height: 0.96 !important;
}

/* Large section headings */
h2,
.home-ambient-route-heading h2,
.solutions-system-page h2,
.services-page h2,
.estimate-configurator-page h2,
[class*="section"] h2,
[class*="Section"] h2 {
  font-family: var(--bs-heading-font) !important;
  font-weight: 820 !important;
  letter-spacing: -0.045em !important;
  line-height: 1.02 !important;
}

/* Card headings: reduce spacing so words don't merge */
h3,
h4,
[class*="card"] h3,
[class*="Card"] h3,
[class*="package"] h3,
[class*="Package"] h3,
[class*="route"] h3,
[class*="Route"] h3 {
  font-family: var(--bs-heading-font) !important;
  font-weight: 760 !important;
  letter-spacing: -0.025em !important;
  line-height: 1.08 !important;
}

/* Body copy, card copy, route copy */
p,
li,
.home-ambient-page p,
.solutions-system-page p,
.services-page p,
.estimate-configurator-page p,
.contact-page p,
[class*="body"],
[class*="Body"],
[class*="description"],
[class*="Description"] {
  font-family: var(--bs-ui-font) !important;
  letter-spacing: -0.018em !important;
  line-height: 1.68 !important;
}

/* Navigation, buttons, small labels */
nav,
header,
nav a,
header a,
button,
.btn-primary,
.btn-secondary,
[class*="nav"],
[class*="Nav"],
[class*="button"],
[class*="Button"],
[class*="actions"],
[class*="Actions"],
[class*="eyebrow"],
[class*="Eyebrow"],
[class*="kicker"],
[class*="Kicker"],
[class*="tag"],
[class*="Tag"],
[class*="pill"],
[class*="Pill"],
[class*="label"],
[class*="Label"],
small {
  font-family: var(--bs-ui-font) !important;
}

/* Editorial small labels */
[class*="eyebrow"],
[class*="Eyebrow"],
[class*="kicker"],
[class*="Kicker"],
[class*="tag"],
[class*="Tag"],
[class*="pill"],
[class*="Pill"] {
  letter-spacing: 0.08em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}

/* Buttons closer to reference */
button,
.btn-primary,
.btn-secondary,
a[class*="btn"],
[class*="button"],
[class*="Button"] {
  font-size: 0.78rem !important;
  font-weight: 600 !important;
  letter-spacing: -0.015em !important;
}

/* Scenario page overlay text */
.scenario-page h1,
.scenario-page h2,
.scenario-page h3,
[class*="scenario"] h1,
[class*="scenario"] h2,
[class*="scenario"] h3 {
  font-family: var(--bs-heading-font) !important;
  letter-spacing: -0.035em !important;
}

.scenario-page p,
.scenario-page span,
.scenario-page button,
[class*="scenario"] p,
[class*="scenario"] span,
[class*="scenario"] button {
  font-family: var(--bs-ui-font) !important;
}

/* Keep Chinese readable. Do not over-tighten CJK. */
html[lang="zh"] h1,
html[lang="zh"] h2,
html[lang="zh"] h3,
:lang(zh) h1,
:lang(zh) h2,
:lang(zh) h3 {
  letter-spacing: -0.025em !important;
}

html[lang="zh"] p,
:lang(zh) p {
  letter-spacing: 0 !important;
  line-height: 1.8 !important;
}

/* Fix known page sections from current App.jsx */
.home-ambient-page,
.solutions-system-page,
.services-page,
.estimate-configurator-page {
  font-family: var(--bs-ui-font) !important;
}

.home-ambient-page h1,
.home-ambient-page h2,
.home-ambient-page h3,
.solutions-system-page h1,
.solutions-system-page h2,
.solutions-system-page h3,
.services-page h1,
.services-page h2,
.services-page h3,
.estimate-configurator-page h1,
.estimate-configurator-page h2,
.estimate-configurator-page h3 {
  font-family: var(--bs-heading-font) !important;
}

/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_END */
`;

css = css.trimEnd() + "\n\n" + newCss + "\n";

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
