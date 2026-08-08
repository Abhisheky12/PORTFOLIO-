/**
 * Generates `public/resume.pdf` from the central portfolio data.
 * Run:  node scripts/generate-resume.js
 *
 * Hand-rolled minimal PDF (Helvetica + WinAnsi encoding) so no
 * external dependencies are required.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { portfolioData } from "../src/data/portfolio.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "resume.pdf");

const PAGE_W = 612; // US Letter width (pt)
const MARGIN = 54;
const MAX_LINE_W = PAGE_W - MARGIN * 2;

// WinAnsi-safe text. Convert common non-latin1 glyphs to safe equivalents.
const toWinAnsi = (s) =>
  s
    .replace(/\u2014|\u2013/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2022/g, "\u2022"); // bullet 0x95 is valid WinAnsi

const esc = (s) => toWinAnsi(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

// Approximate Helvetica character width factor (pt per font point)
const charW = (size) => size * 0.52;

function wrap(text, size) {
  const maxChars = Math.max(10, Math.floor(MAX_LINE_W / charW(size)));
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars) {
      if (line) lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

const { personalInfo, about, experience, projects, skills, achievements, education } = portfolioData;

// ---------------------------------------------------------------- layout ----
const content = []; // text drawing segments
let y = 0;

const draw = (text, { size, bold = false, accent = false, gap = 0 }) => {
  const lines = wrap(text, size);
  const font = bold ? "/F2" : "/F1";
  const color = accent ? "0.024 0.714 0.831 rg" : "0.14 0.14 0.16 rg";
  for (const line of lines) {
    content.push(`BT\n${font} ${size} Tf\n${color}\n${MARGIN} ${y} Td\n(${esc(line)}) Tj\nET`);
    y -= size * 1.32;
  }
  y -= gap;
};

const rule = () => {
  content.push(
    `q\n0.024 0.714 0.831 rg\n${MARGIN} ${y - 3} ${MAX_LINE_W} 1.4 re f\nQ`
  );
  y -= 14;
};

const sectionTitle = (t) => draw(t, { size: 10.5, bold: true, accent: true, gap: 6 });

// Header
y = 758;
draw(personalInfo.name.toUpperCase(), { size: 21, bold: true, gap: 2 });
draw(personalInfo.title, { size: 11.5, accent: true, gap: 4 });

const contactParts = [
  personalInfo.email,
  `github.com/${personalInfo.githubHandle}`,
  `linkedin.com/${personalInfo.linkedinHandle}`,
  `leetcode.com/u/${personalInfo.leetcodeHandle}`,
  `codeforces.com/profile/${personalInfo.codeforcesHandle}`,
];
draw(contactParts.join("   |   "), { size: 8.6, gap: 2 });
rule();

// Summary
sectionTitle("SUMMARY");
draw(about.bio, { size: 9.5, gap: 8 });

// Education
sectionTitle("EDUCATION");
education.forEach((e) => {
  draw(`${e.institution} - ${e.degree}`, { size: 9.8, bold: true, gap: 1 });
  draw(`${e.period}   |   ${e.grade}`, { size: 9, gap: 6 });
});

// Experience
sectionTitle("EXPERIENCE");
experience.forEach((exp) => {
  draw(`${exp.role} - ${exp.company}`, { size: 9.8, bold: true, gap: 1 });
  const bullets = exp.description.slice(0, 3);
  bullets.forEach((b) => draw(`\u2022  ${b}`, { size: 9, gap: 2 }));
  y -= 5;
});

// Projects
sectionTitle("PROJECTS");
projects.forEach((p) => {
  draw(`${p.name} - ${p.description}`, { size: 9, gap: 1 });
  draw(`    Tech: ${p.tech.join(", ")}`, { size: 8.4, gap: 5 });
});

// Skills
sectionTitle("SKILLS");
const skillGroups = [
  ["Languages", skills.languages.map((s) => s.name)],
  ["Frontend", skills.frontend.map((s) => s.name)],
  ["Backend", skills.backend.map((s) => s.name)],
  ["Databases & Tools", skills.tools.map((s) => s.name)],
];
skillGroups.forEach(([label, items]) => {
  draw(`${label}: ${items.join(", ")}`, { size: 9, gap: 4 });
});
y -= 4;

// Achievements
sectionTitle("ACHIEVEMENTS");
achievements.forEach((a) => draw(`\u2022  ${a.title} - ${a.detail}`, { size: 9, gap: 3 }));

const contentBottom = y - 20;
const PAGE_H = Math.max(792, Math.abs(contentBottom) + MARGIN);

// -------------------------------------------------------------- pdf build ----
const headerFont = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
const headerBoldFont = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  headerFont,
  headerBoldFont,
  `<< /Length ${Buffer.byteLength(content.join("\n"), "latin1")} >>\nstream\n${content.join("\n")}\nendstream`,
];

let out = "%PDF-1.4\n";
const offsets = new Array(objects.length + 1).fill(0);
objects.forEach((body, i) => {
  offsets[i + 1] = Buffer.byteLength(out, "latin1");
  out += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefPos = Buffer.byteLength(out, "latin1");
out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  out += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;

fs.writeFileSync(OUT, Buffer.from(out, "latin1"));
console.log(`Resume written to ${OUT} (${fs.statSync(OUT).size} bytes)`);
