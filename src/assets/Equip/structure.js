import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_DIR = path.join(__dirname, "icon");
const IMG_DIR = path.join(__dirname, "img");

const OUTPUT = path.join(__dirname, "items.json");

const iconFiles = fs.readdirSync(ICON_DIR);
const imgFiles = fs.readdirSync(IMG_DIR);

const result = {};

for (const file of iconFiles) {
  const match = file.match(
    /^Icon_Item_Equip_(.+)_(Head|Chest|Foot|Hand|Leg)\.(.+)$/i,
  );

  if (!match) continue;

  const [, setName, slot] = match;
  const normalizedSlot = slot.toLowerCase();

  const imgFile = imgFiles.find((file) =>
    file.match(new RegExp(`^Img_Item_Equip_${setName}_${slot}\\.[^.]+$`, "i")),
  );

  if (!result[setName]) {
    result[setName] = {};
  }

  result[setName][normalizedSlot] = {
    name: setName,
    srcIcon: `/assets/Equip/icon/${file}`,
    srcIMG: imgFile ? `/assets/Equip/img/${imgFile}` : null,
  };
}

fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2), "utf8");

console.log(`Generated: ${OUTPUT}`);
