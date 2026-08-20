const fs = require("fs");
const path = require("path");

const INPUT_DIR = __dirname;
const OUTPUT_FILE = path.join(__dirname, "assets.json");

const result = {};

const sections = fs.readdirSync(INPUT_DIR, { withFileTypes: true });

for (const section of sections) {
  if (!section.isDirectory()) continue;

  const sectionPath = path.join(INPUT_DIR, section.name);

  result[section.name] = {};

  const files = fs.readdirSync(sectionPath, { withFileTypes: true });

  for (const file of files) {
    if (!file.isFile()) continue;

    const extension = path.extname(file.name);
    const fileName = path.basename(file.name, extension);

    result[section.name][fileName] = path.join(section.name, file.name).replace(/\\/g, "/");
  }
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2), "utf8");

console.log(`JSON generado: ${OUTPUT_FILE}`);