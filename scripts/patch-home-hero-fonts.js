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
  `home-hero-fonts-${stamp}`
);

fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(cssPath, path.join(backupDir, "App.css.bak"));

let css = fs.readFileSync(cssPath, "utf8");

// Add font import once.
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800;900&display=swap');`;

if (!css.includes("fonts.googleapis.com/css2?family=IBM+Plex+Mono")) {
  css = fontImport + "\n" + css;
}

const start = "/* BOSONSMART_HOME_HERO_FONT_MATCH_START */";
const end = "/* BOSONSMART_HOME_HERO_FONT_MATCH_END */";

const fontCss = `
${start}

/* Font matching for the reference-style homepage hero */
.home-ambient-page .home-ambient-hero-title,
.home-ambient-page .home-ambient-hero__copy h1 {
  font-family: "Inter Tight", "Arial Narrow", "Helvetica Neue", Arial, sans-serif !important;
  font-weight: 800 !important;
  letter-spacing: -0.075em !important;
}

.home-ambient-page .home-ambient-eyebrow,
.home-ambient-page .home-ambient-hero__copy > p:not(.home-ambient-eyebrow),
.home-ambient-page .home-ambient-actions .btn-primary,
.home-ambient-page .home-ambient-actions .btn-secondary {
  font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace !important;
}

.home-ambient-page .home-ambient-eyebrow {
  font-size: 0.68rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.12em !important;
}

.home-ambient-page .home-ambient-hero__copy > p:not(.home-ambient-eyebrow) {
  font-size: 0.92rem !important;
  line-height: 1.65 !important;
  letter-spacing: -0.02em !important;
}

.home-ambient-page .home-ambient-actions .btn-primary,
.home-ambient-page .home-ambient-actions .btn-secondary {
  font-size: 0.72rem !important;
  font-weight: 600 !important;
  letter-spacing: -0.02em !important;
  text-transform: lowercase !important;
}

${end}
`;

const pattern = new RegExp(
  start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\\s\\S]*?" + end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

if (pattern.test(css)) {
  css = css.replace(pattern, fontCss);
  console.log("Updated existing hero font block.");
} else {
  css = css.trimEnd() + "\n\n" + fontCss + "\n";
  console.log("Added hero font block.");
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
