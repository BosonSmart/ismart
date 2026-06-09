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
  `global-font-readable-${stamp}`
);

fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(cssPath, path.join(backupDir, "App.css.bak"));

let css = fs.readFileSync(cssPath, "utf8");

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&family=Inter+Tight:wght@500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;600;700;800;900&display=swap');`;

if (!css.includes("family=Inter:wght")) {
  css = fontImport + "\n" + css;
}

// Remove previous font experiments that caused spacing problems.
const removeBlocks = [
  ["/* BOSONSMART_HOME_HERO_FONT_MATCH_START */", "/* BOSONSMART_HOME_HERO_FONT_MATCH_END */"],
  ["/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_START */", "/* BOSONSMART_GLOBAL_REFERENCE_FONT_STYLE_END */"],
  ["/* BOSONSMART_REFERENCE_HERO_TUNE_START */", "/* BOSONSMART_REFERENCE_HERO_TUNE_END */"],
  ["/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_START */", "/* BOSONSMART_GLOBAL_REFERENCE_FONT_HARD_END */"],
  ["/* BOSONSMART_GLOBAL_REFERENCE_FONT_READABLE_START */", "/* BOSONSMART_GLOBAL_REFERENCE_FONT_READABLE_END */"]
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

const start = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_READABLE_START */";
const end = "/* BOSONSMART_GLOBAL_REFERENCE_FONT_READABLE_END */";

const newCss = `
${start}

/* Cleaner reference-style typography.
   Keep the editorial feel, but stop forcing mono fonts and tight spacing everywhere. */

:root {
  --bs-font-display: "Inter Tight", "Noto Sans TC", "Helvetica Neue", Arial, sans-serif;
  --bs-font-body: "Inter", "Noto Sans TC", "Helvetica Neue", Arial, sans-serif;
  --bs-font-mono: "IBM Plex Mono", "Noto Sans TC", "SFMono-Regular", Consolas, monospace;
}

/* Base readable text */
html,
body,
#root {
  font-family: var(--bs-font-body) !important;
  letter-spacing: 0 !important;
  word-spacing: normal !important;
}

/* Normal content should be readable, not mono-heavy */
p,
li,
span,
input,
textarea,
select,
label {
  font-family: var(--bs-font-body) !important;
  letter-spacing: 0 !important;
  word-spacing: normal !important;
  line-height: 1.68 !important;
}

/* Big headings use the reference-style tight grotesk */
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
  font-family: var(--bs-font-display) !important;
  word-spacing: 0.04em !important;
}

/* Hero headings */
h1,
[class*="hero"] h1,
[class*="Hero"] h1,
.home-ambient-page .home-ambient-hero-title,
.home-ambient-page .home-ambient-hero__copy h1,
.solutions-system-page .solutions-system-hero__copy h1,
.services-page .services-hero h1,
.estimate-configurator-page .estimate-configurator-hero h1 {
  font-family: var(--bs-font-display) !important;
  font-weight: 850 !important;
  letter-spacing: -0.045em !important;
  line-height: 0.98 !important;
  word-spacing: 0.055em !important;
}

/* Section headings */
h2,
.home-ambient-route-heading h2,
.solutions-system-page h2,
.services-page h2,
.estimate-configurator-page h2,
[class*="section"] h2,
[class*="Section"] h2 {
  font-family: var(--bs-font-display) !important;
  font-weight: 820 !important;
  letter-spacing: -0.035em !important;
  line-height: 1.04 !important;
  word-spacing: 0.055em !important;
}

/* Card headings: less tight, otherwise words merge */
h3,
h4,
[class*="card"] h3,
[class*="Card"] h3,
[class*="package"] h3,
[class*="Package"] h3,
[class*="route"] h3,
[class*="Route"] h3 {
  font-family: var(--bs-font-display) !important;
  font-weight: 760 !important;
  letter-spacing: -0.018em !important;
  line-height: 1.12 !important;
  word-spacing: 0.045em !important;
}

/* Small editorial UI text uses mono */
nav,
header,
nav a,
header a,
button,
.btn-primary,
.btn-secondary,
a[class*="btn"],
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
  font-family: var(--bs-font-mono) !important;
  word-spacing: normal !important;
}

/* Eyebrows / tags */
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

/* Buttons */
button,
.btn-primary,
.btn-secondary,
a[class*="btn"] {
  font-size: 0.78rem !important;
  font-weight: 600 !important;
  letter-spacing: -0.005em !important;
  line-height: 1 !important;
}

/* Fix key page families from current App.jsx */
.home-ambient-page,
.solutions-system-page,
.services-page,
.estimate-configurator-page {
  font-family: var(--bs-font-body) !important;
}

.home-ambient-page p,
.solutions-system-page p,
.services-page p,
.estimate-configurator-page p {
  font-family: var(--bs-font-body) !important;
  letter-spacing: 0 !important;
  word-spacing: normal !important;
}

/* Scenario page: keep cinematic headings but readable body */
.scenario-page h1,
.scenario-page h2,
.scenario-page h3,
[class*="scenario"] h1,
[class*="scenario"] h2,
[class*="scenario"] h3 {
  font-family: var(--bs-font-display) !important;
  letter-spacing: -0.025em !important;
  word-spacing: 0.04em !important;
}

.scenario-page p,
.scenario-page span,
.scenario-page button,
[class*="scenario"] p,
[class*="scenario"] span,
[class*="scenario"] button {
  font-family: var(--bs-font-mono) !important;
  letter-spacing: 0 !important;
}

/* Chinese readability */
html[lang="zh"] h1,
html[lang="zh"] h2,
html[lang="zh"] h3,
:lang(zh) h1,
:lang(zh) h2,
:lang(zh) h3 {
  font-family: "Noto Sans TC", var(--bs-font-display) !important;
  letter-spacing: -0.018em !important;
  word-spacing: normal !important;
}

html[lang="zh"] p,
:lang(zh) p {
  font-family: "Noto Sans TC", var(--bs-font-body) !important;
  letter-spacing: 0 !important;
  line-height: 1.8 !important;
}

/* Homepage hero keeps the reference look */
.home-ambient-page .home-ambient-hero-title,
.home-ambient-page .home-ambient-hero__copy h1 {
  letter-spacing: -0.05em !important;
  word-spacing: 0.055em !important;
}

.home-ambient-page .home-ambient-hero__copy > p:not(.home-ambient-eyebrow) {
  font-family: var(--bs-font-mono) !important;
  font-size: 0.9rem !important;
  letter-spacing: 0 !important;
  line-height: 1.65 !important;
}

${end}
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
