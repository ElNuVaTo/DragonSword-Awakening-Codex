import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHARACTERS_DIR = __dirname;

const RENAMES = [
  {
    prefix: "Icon_Item_Character",
    newName: "portrait",
  },
  {
    prefix: "Img_Character_Key",
    newName: "full",
  },
  {
    prefix: "Img_Character_KeyHalf",
    newName: "full-gradient",
  },
  {
    prefix: "Img_Character_MainKeyHalf",
    newName: "medium",
  },
];

const folders = fs.readdirSync(CHARACTERS_DIR, {
  withFileTypes: true,
});

for (const folder of folders) {
  if (!folder.isDirectory()) continue;

  const characterName = folder.name;

  // Ignorar carpetas que empiezan con X
  if (characterName.startsWith("X")) {
    console.log(`⏭️ Ignorado: ${characterName}`);
    continue;
  }

  const characterPath = path.join(CHARACTERS_DIR, characterName);

  const srcPath = path.join(characterPath, "src");

  fs.mkdirSync(srcPath, {
    recursive: true,
  });

  const files = fs.readdirSync(characterPath);

  for (const { prefix, newName } of RENAMES) {
    const expectedPrefix = `${prefix}_${characterName}`;

    const file = files.find((fileName) => fileName.startsWith(expectedPrefix));

    if (!file) {
      console.log(`⚠️ ${characterName}: no encontrado ${expectedPrefix}`);

      continue;
    }

    const extension = path.extname(file);

    const oldPath = path.join(characterPath, file);

    const newPath = path.join(srcPath, `${newName}${extension}`);

    if (fs.existsSync(newPath)) {
      console.log(`⚠️ ${characterName}: ya existe src/${newName}${extension}`);

      continue;
    }

    fs.renameSync(oldPath, newPath);

    console.log(`✅ ${characterName}: ${file} → src/${newName}${extension}`);
  }
}

console.log("\n✨ Terminado.");
